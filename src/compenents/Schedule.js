import React, { useState } from 'react';
import './assets/Schedule.css';

const Schedule = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const [selectedDate, setSelectedDate] = useState(currentDate);

  const handlePreviousMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1));
  };

  const getMonthName = (date) => {
    const options = { month: 'long' };
    return date.toLocaleString('en-US', options);
  };

  const renderCalendar = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const calendarRows = [];

    let dayCounter = 1;

    for (let week = 0; week < 6; week++) {
      const calendarDays = [];

      for (let day = 0; day < 7; day++) {
        if ((week === 0 && day < firstDayOfMonth) || dayCounter > daysInMonth) {
          calendarDays.push(<td key={`empty-${week}-${day}`} className="empty"></td>);
        } else {
          const isSelected = dayCounter === currentDate.getDate() && month === currentMonth && year === currentYear;
          calendarDays.push(
            <td key={`day-${week}-${day}`} className={isSelected ? 'selected' : ''}>
              <span>{dayCounter}</span>
            </td>
          );
          
          dayCounter++;
        }
      }

      calendarRows.push(<tr key={`week-${week}`}>{calendarDays}</tr>);
      if (dayCounter > daysInMonth) break;
    }

    return calendarRows;
  };

  return (
    <div className="schedule-page">
      <h1 className="schedule-title">Schedule</h1>
      <div className="calendar">
        <div className="calendar-header">
                        <h2 className="calendar-month">{getMonthName(selectedDate)} {selectedDate.getFullYear()}</h2>
        </div>
              <div className="calendar-controls">         
            <button className="calendar-button" onClick={handlePreviousMonth}>Previous</button>
            <button className="calendar-button" onClick={handleNextMonth}>Next</button>
          </div>
        
        <table>
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>{renderCalendar()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
