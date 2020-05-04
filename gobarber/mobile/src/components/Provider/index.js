import React from 'react';

import PropTypes from 'prop-types';

import {Container, Avatar, Name} from './styles';

export default function Provider({data: {name, avatar}, ...rest}) {
  return (
    <Container {...rest}>
      <Avatar
        source={{
          uri: avatar
            ? avatar.url
            : `https://api.adorable.io/avatars/50/${name}`,
        }}
      />
      <Name>{name}</Name>
    </Container>
  );
}

Provider.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
};
