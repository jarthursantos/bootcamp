import React, {useState, useEffect} from 'react';
import {Keyboard, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
} from './styles';

import api from '../../services/api';

export default function Main({navigation}) {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const storagedUsers = await AsyncStorage.getItem('users');

      if (storagedUsers) setUsers(JSON.parse(storagedUsers));
    })();
  }, []);

  useEffect(() => {
    if (users.length !== 0) {
      (async () => {
        await AsyncStorage.setItem('users', JSON.stringify(users));
      })();
    }
  }, [users]);

  const handleAddUser = async () => {
    setLoading(true);

    const response = await api.get(`users/${newUser}`);

    const data = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url,
    };

    setNewUser('');
    setUsers([...users, data]);
    setLoading(false);

    Keyboard.dismiss();
  };

  const handleNavigate = user => {
    navigation.navigate('User', {user});
  };

  return (
    <Container>
      <Form>
        <Input
          value={newUser}
          onChangeText={setNewUser}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Adicionar Usuário"
          returnKeyType="send"
          onSubmitEditing={handleAddUser}
        />
        <SubmitButton loading={loading} onPress={handleAddUser}>
          {loading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <Icon name="add" size={20} color="#FFF" />
          )}
        </SubmitButton>
      </Form>
      <List
        data={users}
        keyExtractor={user => user.login}
        renderItem={({item}) => (
          <User>
            <Avatar source={{uri: item.avatar}} />
            <Name>{item.name}</Name>
            <Bio>{item.bio}</Bio>

            <ProfileButton onPress={() => handleNavigate(item)}>
              <ProfileButtonText>Ver Perfil</ProfileButtonText>
            </ProfileButton>
          </User>
        )}
      />
    </Container>
  );
}

Main.navigationOptions = {
  title: 'Usuários',
};

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};

Main.defaultProps = {
  navigation: null,
};
