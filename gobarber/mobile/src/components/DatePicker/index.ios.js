import React, {useState, useMemo} from 'react';
import {DatePickerIOS} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {format} from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';

import {Container, DateText, DateButton, Picker} from './styles';

export default function DatePicker({date, onChange}) {
  const [opened, setOpened] = useState(false);
  const formatedDate = useMemo(() => {
    return format(date, "dd 'de' MMMM 'de' yyyy", {
      locale: pt,
    });
  }, [date]);

  return (
    <Container>
      <DateButton onPress={() => setOpened(!opened)}>
        <Icon name="event" color="#fff" size={20} />
        <DateText>{formatedDate}</DateText>
      </DateButton>

      {opened && (
        <Picker>
          <DatePickerIOS
            date={date}
            onDateChange={onChange}
            minimumDate={new Date()}
            minuteInterval={60}
            locale="pt"
            mode="date"
          />
        </Picker>
      )}
    </Container>
  );
}

DatePicker.propTypes = {
  date: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
};

DatePicker.defaultProps = {
  date: new Date(),
  onChange: () => {},
};
