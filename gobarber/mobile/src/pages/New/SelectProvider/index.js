import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import PropTypes from 'prop-types';

import Background from '~/components/Background';
import Provider from '~/components/Provider';
import api from '~/services/api';

import {Container, List} from './styles';

export default function SelectProvider({navigation}) {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get('/providers');

      setProviders(response.data);
    })();
  }, []);

  return (
    <Background>
      <Container>
        <List
          data={providers}
          keyExtractor={item => String(item.id)}
          renderItem={({item: provider}) => (
            <Provider
              onPress={() => navigation.navigate('SelectDateTime', {provider})}
              data={provider}
            />
          )}
        />
      </Container>
    </Background>
  );
}

SelectProvider.navigationOptions = ({navigation}) => ({
  title: 'Selecione o prestador',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});

SelectProvider.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
