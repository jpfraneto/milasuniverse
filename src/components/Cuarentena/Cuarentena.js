import React, { useState } from 'react';
import { DayDisplay, DayNumber } from '..';
import sortByDay from '../../functions/functions';
import {
  daysDiv,
  mainDiv,
  selectedDayOuterDiv,
  selectedDaySpan,
} from './styles.module.css';

export const Cuarentena = ({ diasDisponibles }) => {
  diasDisponibles = sortByDay('frontmatter.day', diasDisponibles);
  const [selectedDay, setSelectedDay] = useState(
    diasDisponibles[diasDisponibles.length - 1]
  );
  const days = new Array(40).fill(null);
  diasDisponibles.forEach((diaDisponible, index) => {
    days[index] = diaDisponible;
  });
  return (
    <article className={mainDiv}>
      <div className={daysDiv}>
        {days.map((day, index) => {
          return (
            <DayNumber
              key={index}
              available={day ? true : false}
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
              number={index + 1}
              thisDay={day}
            />
          );
        })}
      </div>
      <div className={selectedDayOuterDiv}>
        <h2>
          {selectedDay
            ? `Dia ${selectedDay.frontmatter.day}`
            : `Selecciona un Dia, de los ${diasDisponibles.length} disponibles`}
        </h2>
        <DayDisplay selectedDay={selectedDay} />
      </div>
    </article>
  );
};
