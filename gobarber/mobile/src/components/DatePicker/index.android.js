import React, {useMemo} from 'react';
import {DatePickerAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {format} from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';

import {Container, DateText, DateButton} from './styles';

export default function TimePicker({date, onChange}) {
  const formatedDate = useMemo(() => {
    return format(date, "dd 'de' MMMM 'de' yyyy", {
      locale: pt,
    });
  }, [date]);

  async function handleOpenPicker() {
    const {action, year, month, day} = await DatePickerAndroid.open({
      minDate: new Date(),
      mode: 'spinner',
      date,
    });

    if (action === DatePickerAndroid.dateSetAction) {
      const selectedDate = new Date(year, month, day);

      onChange(selectedDate);
    }
  }

  return (
    <Container>
      <DateButton onPress={handleOpenPicker}>
        <Icon name="event" color="#fff" size={20} />
        <DateText>{formatedDate}</DateText>
      </DateButton>
    </Container>
  );
}

TimePicker.propTypes = {
  date: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
};

TimePicker.defaultProps = {
  date: new Date(),
  onChange: () => {},
};
