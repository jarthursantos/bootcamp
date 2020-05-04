import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import PropTypes from 'prop-types';

import Background from '~/components/Background';
import DatePicker from '~/components/DatePicker';
import api from '~/services/api';

import {Container, HourList, Hour, Title} from './styles';

export default function SelectDateTime({navigation}) {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState(new Date());

  const provider = navigation.getParam('provider');

  useEffect(() => {
    (async () => {
      const response = await api.get(`/providers/${provider.id}/available`, {
        params: {
          date: date.getTime(),
        },
      });

      setHours(response.data);
    })();
  }, [date, provider.id]);

  function handleSelectHour(time) {
    navigation.navigate('Confirm', {provider, time});
  }

  return (
    <Background>
      <Container>
        <DatePicker date={date} onChange={setDate} />

        <HourList
          data={hours}
          keyExtractor={item => item.time}
          renderItem={({item}) => (
            <Hour
              onPress={() => handleSelectHour(item.value)}
              enabled={item.available}>
              <Title>{item.time}</Title>
            </Hour>
          )}
        />
      </Container>
    </Background>
  );
}

SelectDateTime.navigationOptions = ({navigation}) => ({
  title: 'Selecione o horário',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});

SelectDateTime.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
