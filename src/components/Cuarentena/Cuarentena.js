import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { DayDisplay, DayNumber } from '..';
import functions from '../../functions/functions';
import { GrPrevious, GrNext } from 'react-icons/gr';
import {
  daysDiv,
  mainDiv,
  selectedDayOuterDiv,
  dayPicker,
  imageBtn,
} from './styles.module.css';

export const Cuarentena = ({ diasDisponibles }) => {
  const [viewerType, setViewerType] = useState('');
  useEffect(() => {
    const getViewerType = () => {
      const { innerWidth: width, innerHeight: height } = window;
      if (width > 1300) setViewerType('huge');
      else setViewerType('other');
    };
    getViewerType();
  });
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
  const changeDay = x => {
    console.log(x, selectedDay.frontmatter.day);
    if (x === -1 && +selectedDay.frontmatter.day === 1)
      return alert('Este es el primer dia!');
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
                } else return <></>;
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
      <button className={imageBtn} onClick={() => changeDay(-1)}>
        <GrPrevious />
      </button>{' '}
      <button className={imageBtn} onClick={() => changeDay(1)}>
        <GrNext />
      </button>
    </article>
  );
};
