import React from 'react';
import { daySpan, selectedDaySpan, nonAvailableDay } from './styles.module.css';

export const DayNumber = ({
  number,
  selectedDay,
  setSelectedDay,
  available,
  thisDay,
}) => {
  if (available) {
    return (
      <span
        role='button'
        tabIndex={0}
        onKeyDown={() => {
          setSelectedDay(thisDay);
        }}
        onClick={() => {
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
        role='button'
        tabIndex={0}
        onKeyDown={() => {
          alert('Todavía no llegamos a ese día! Paciencia...');
        }}
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
