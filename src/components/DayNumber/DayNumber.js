import React, { useState } from 'react';
import { daySpan, selectedDaySpan, nonAvailableDay } from './styles.module.css';

export const DayNumber = ({
  number,
  selectedDay,
  setSelectedDay,
  available,
  thisDay,
}) => {
  const [selected, setSelected] = useState(false);
  if (available) {
    return (
      <span
        onClick={() => {
          setSelected(true);
          setSelectedDay(thisDay);
        }}
        className={
          +selectedDay.frontmatter.day === number ? selectedDaySpan : daySpan
        }
      >
        {number}
      </span>
    );
  } else {
    return (
      <span
        onClick={() => {
          alert('Todavía no llegamos a ese día! Paciencia...');
        }}
        className={nonAvailableDay}
      >
        {number}
      </span>
    );
  }
};
