import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';

import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

export default function User({navigation}) {
  const [user, setUser] = useState();
  const [stars, setStars] = useState([]);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [endReached, setEndReached] = useState(false);

  useEffect(() => {
    setUser(navigation.getParam('user'));
  }, []);

  useEffect(() => {
    (async () => {
      if (!refreshing) {
        if (!user || endReached) return;
      }

      const response = await api.get(`users/${user.login}/starred`, {
        params: {page},
      });

      setEndReached(response.data < 30);
      setRefreshing(false);

      setStars([...(page === 1 ? [] : stars), ...response.data]);
    })();
  }, [user, page, refreshing]);

  const loadMore = () => {
    setPage(page + 1);
  };

  const refreshList = () => {
    setPage(1);
    setEndReached(false);

    setRefreshing(true);
  };

  const handleNavigate = repo => {
    navigation.navigate('Repository', {repo});
  };

  return (
    <Container>
      <Header>
        <Avatar source={{uri: user ? user.avatar : ''}} />
        <Name>{user && user.name}</Name>
        <Bio>{user && user.bio}</Bio>
      </Header>
      <Stars
        data={stars}
        keyExtractor={star => `${star.id}`}
        renderItem={({item}) => (
          <Starred onPress={() => handleNavigate(item)}>
            <OwnerAvatar source={{uri: item.owner.avatar_url}} />
            <Info>
              <Title>{item.name}</Title>
              <Author>{item.owner.login}</Author>
            </Info>
          </Starred>
        )}
        ListFooterComponent={
          endReached || refreshing ? (
            <View style={{height: 16}} />
          ) : (
            <View style={{width: '100%', height: 74, paddingBottom: 16}}>
              <ActivityIndicator color="#7159c1" size={42} />
            </View>
          )
        }
        onRefresh={refreshList}
        refreshing={refreshing}
        onEndReached={loadMore}
        onEndReachedThreshold={0.2}
      />
    </Container>
  );
}

export function navigationOptions({navigation}) {
  return {
    title: navigation.getParam('user').login,
  };
}

User.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
  }),
};

User.defaultProps = {
  navigation: null,
};
