import React, { useState, useMemo, useEffect } from 'react';
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  isEqual,
  parseISO,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import api from '~/services/api';

import { Container, Time } from './styles';

export default function Dashboard() {
  const { date, setDate } = useState(new Date());
  const { schedules, setSchedules } = useState([]);

  const range = new Array(12).map(i => 8 + i);

  useEffect(() => {
    (async () => {
      const response = await api.get('/schedule', {
        params: { date },
      });

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = range.map(hour => {
        const checkDate = setSeconds(setMinutes(setHours(date, hour), 0), 0);
        const compareDate = utcToZonedTime(checkDate, timezone);

        return {
          time: `${hour}:00h`,
          past: isBefore(compareDate, new Date()),
          appointment: response.date.find(schedule =>
            isEqual(parseISO(schedule.date), compareDate)
          ),
        };
      });

      setSchedules(data);
    })();
  });

  const dateFormated = useMemo(() => {
    format(date, "d 'de' MMMM", { locale: pt });
  }, [date]);

  const handlePreviousDay = () => setDate(subDays(date, 1));
  const handleNextDay = () => setDate(addDays(date, 1));

  return (
    <Container>
      <header>
        <button type="button" onClick={handlePreviousDay}>
          <MdChevronLeft size={36} color="#FFF" />
        </button>
        <strong>{dateFormated}</strong>
        <button type="button" onClick={handleNextDay}>
          <MdChevronRight size={36} color="#FFF" />
        </button>
      </header>

      <ul>
        {schedules.map(schedule => (
          <Time
            key={schedule.time}
            past={schedule.past}
            available={!schedule.appointment}
          >
            <strong>{schedule.time}</strong>
            <span>
              {schedule.appointment
                ? schedule.appointment.user.name
                : 'Em Aberto'}
            </span>
          </Time>
        ))}
      </ul>
    </Container>
  );
}
