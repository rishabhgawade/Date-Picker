"use client";
import './DatePicker.css';  
import useDatePickerStore from './store';
import { useState } from 'react';

const recurringOptions = ['None', 'Daily', 'Weekly', 'Monthly', 'Yearly'];

const DatePicker = () => {
  const { selectedDate, recurringType, setSelectedDate, setRecurringType } = useDatePickerStore();
  const [isCalendarVisible, setCalendarVisible] = useState(false);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="date-picker-container">
      <h2>Pick a Date</h2>
      
      <div>
        <label htmlFor="date">Select Date</label>
        <input
          type="date"
          id="date"
          value={selectedDate || ''}
          onChange={handleDateChange}
          className="date-picker-input"
        />
      </div>
      
      <div>
        <label htmlFor="recurring">Recurring Options</label>
        <select
          id="recurring"
          value={recurringType}
          onChange={(e) => setRecurringType(e.target.value)}
          className="date-picker-select"
        >
          {recurringOptions.map((option) => (
            <option key={option} value={option.toLowerCase()}>{option}</option>
          ))}
        </select>
      </div>

      {recurringType !== 'none' && (
        <div className="recurring-box">
          <p>Recurring <strong>{recurringType}</strong> on <strong>{selectedDate || 'date not selected yet'}</strong>.</p>
        </div>
      )}

      <button
        className="confirm-btn"
        onClick={() => alert(`Date: ${selectedDate}, Recurrence: ${recurringType}`)}
      >
        Confirm Selection
      </button>
    </div>
  );
};

export default DatePicker;
