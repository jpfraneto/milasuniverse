import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { DayDisplay, DayNumber } from '..';
import functions from '../../functions/functions';
import {
  daysDiv,
  mainDiv,
  selectedDayOuterDiv,
  dayPicker,
} from './styles.module.css';

export const Cuarentena = ({ diasDisponibles }) => {
  diasDisponibles = functions.sortByDay('frontmatter.day', diasDisponibles);
  const [selectedDay, setSelectedDay] = useState(
    diasDisponibles[diasDisponibles.length - 1]
  );
  const days = new Array(40).fill(null);
  diasDisponibles.forEach((diaDisponible, index) => {
    days[index] = diaDisponible;
  });
  const handleSelect = e => {
    const thisDay = diasDisponibles.filter(
      x => x.frontmatter.day === e.target.value
    )[0];
    setSelectedDay(thisDay);
  };
  const viewerType = functions.getViewerType();
  const changeDay = x => {
    const newDay = diasDisponibles.filter(
      a => +a.frontmatter.day === +selectedDay.frontmatter.day + x
    )[0];
    if (newDay) setSelectedDay(newDay);
    else alert('Estás viendo el último día disponible!');
  };
  const handlers = useSwipeable({
    onSwipedLeft: () => changeDay(1),
    onSwipedRight: () => changeDay(-1),
  });
  return (
    <article {...handlers} className={mainDiv}>
      <div>
        {viewerType === 'huge' ? (
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
        ) : (
          <div>
            <select
              className={dayPicker}
              onChange={handleSelect}
              id='dayPicker'
              value={selectedDay.frontmatter.day}
            >
              {diasDisponibles.map((day, index) => {
                if (day) {
                  return <option key={index}>{day.frontmatter.day}</option>;
                } else return;
              })}
            </select>
          </div>
        )}
      </div>
      <div className={selectedDayOuterDiv}>
        <h2>
          {selectedDay
            ? `Dia ${selectedDay.frontmatter.day}: ${selectedDay.frontmatter.title}`
            : `Selecciona un Dia, de los ${diasDisponibles.length} disponibles`}
        </h2>
        <DayDisplay selectedDay={selectedDay} />
      </div>
    </article>
  );
};
