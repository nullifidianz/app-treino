import React from 'react';

const DaySelector = ({ selectedDay, onDayChange }) => {
  return (
    <div>
      <label htmlFor="day-select">Dia:</label>
      <select id="day-select" value={selectedDay} onChange={onDayChange}>
        <option value="Monday">Segunda</option>
        <option value="Tuesday">Terça</option>
        <option value="Wednesday">Quarta</option>
        <option value="Thursday">Quinta</option>
        <option value="Friday">Sexta</option>
        <option value="Saturday">Sábado</option>
        <option value="Sunday">Domingo</option>
      </select>
    </div>
  );
};

export default DaySelector;
