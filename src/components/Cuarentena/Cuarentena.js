import React, { useState, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import { DayDisplay, DayNumber } from '..';
import functions from '../../functions/functions';
import { GrPrevious, GrNext } from 'react-icons/gr';
import {
  daysDiv,
  mainDiv,
  selectedDayOuterDiv,
  diaText,
  imageBtn,
  btnsDiv,
  btnIcon,
  swipeMsg,
} from './styles.module.css';

export const Cuarentena = ({ diasDisponibles, setModalImage }) => {
  const myRef = useRef(null);
  const executeScroll = () => {
    myRef.current.scrollIntoView();
  };
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
    if (x === -1 && +selectedDay.frontmatter.day === 1)
      return alert('Este es el primer dia!');
    const newDay = diasDisponibles.filter(
      a => +a.frontmatter.day === +selectedDay.frontmatter.day + x
    )[0];
    if (newDay) {
      executeScroll();
      setSelectedDay(newDay);
    } else alert('Estás viendo el último día disponible!');
  };
  const handlers = useSwipeable({
    onSwipedLeft: () => changeDay(1),
    onSwipedRight: () => changeDay(-1),
  });
  return (
    <article {...handlers} className={mainDiv}>
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
        <h2 ref={myRef} className={diaText}>
          {selectedDay
            ? `Dia ${selectedDay.frontmatter.day}: ${selectedDay.frontmatter.title}`
            : `Selecciona un Dia, de los ${diasDisponibles.length} disponibles`}
        </h2>
        <DayDisplay setModalImage={setModalImage} selectedDay={selectedDay} />
      </div>
      <div className={btnsDiv}>
        {+selectedDay.frontmatter.day !== 1 && (
          <button className={imageBtn} onClick={() => changeDay(-1)}>
            <GrPrevious className={btnIcon} /> Anterior
          </button>
        )}
        {+selectedDay.frontmatter.day !== diasDisponibles.length && (
          <button
            className={imageBtn}
            onClick={() => {
              changeDay(1);
            }}
          >
            Siguiente <GrNext className={btnIcon} />
          </button>
        )}
        <p className={swipeMsg}>
          También puedes cambiar la imagen deslizando hacia un lado
        </p>
      </div>
    </article>
  );
};
