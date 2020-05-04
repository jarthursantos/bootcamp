import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {withNavigationFocus} from 'react-navigation';

import Appointment from '~/components/Appointment';
import Background from '~/components/Background';
import api from '~/services/api';

import {Container, Title, List} from './styles';

function Dashboard({isFocused}) {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (isFocused) {
      (async () => {
        const response = await api.get('/appointments');

        setAppointments(response.data);
      })();
    }
  }, [isFocused]);

  async function handleCancel(id) {
    const response = await api.delete(`/appointments/${id}`);

    setAppointments(
      appointments.map(appointment =>
        appointment.id === id ? response.data : appointment,
      ),
    );
  }

  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>

        <List
          data={appointments}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <Appointment data={item} onCancel={() => handleCancel(item.id)} />
          )}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({tintColor}) => ( /* eslint-disable-line */
    <Icon name="event" color={tintColor} size={20} />
  ),
};

export default withNavigationFocus(Dashboard);
