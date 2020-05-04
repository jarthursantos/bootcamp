import React, {useMemo} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {parseISO, formatRelative} from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';

import {Container, Left, Avatar, Info, Name, Time} from './styles';

export default function Appointment({
  data: {provider, date, past, cancelable, canceled_at},
  onCancel,
}) {
  const dataParsed = useMemo(() => {
    return formatRelative(parseISO(date), new Date(), {
      addSuffix: true,
      locale: pt,
    });
  }, [date]);

  return (
    <Container past={past}>
      <Left>
        <Avatar
          source={{
            uri: provider.avatar
              ? provider.avatar.url
              : `https://api.adorable.io/avatars/50/${provider.name}`,
          }}
        />
        <Info>
          <Name>{provider.name}</Name>
          <Time>{dataParsed}</Time>
        </Info>
      </Left>

      {cancelable && !canceled_at && (
        <TouchableOpacity onPress={onCancel}>
          <Icon name="event-busy" size={20} color="#f64c75" />
        </TouchableOpacity>
      )}
    </Container>
  );
}

Appointment.propTypes = {
  onCancel: PropTypes.func.isRequired,
  data: PropTypes.shape({
    past: PropTypes.bool.isRequired,
    cancelable: PropTypes.bool.isRequired,
    date: PropTypes.string.isRequired,
    canceled_at: PropTypes.string,
    provider: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.shape({
        url: PropTypes.string,
      }),
    }).isRequired,
  }).isRequired,
};
