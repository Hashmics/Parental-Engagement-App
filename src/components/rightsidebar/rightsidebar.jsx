import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './rightsidebar.css'




function ShowCalendar() {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  const handlePrevMonth = () => {
    setDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  const handleAddEvent = event => {
    setEvents(prevEvents => [...prevEvents, event]);
  };

  const handleRemoveEvent = eventId => {
    setEvents(prevEvents => prevEvents.filter(event => event.id !== eventId));
  };

  return (
    <div className='calendar'>
      <Link to='/calendar' >Calendar</Link>
      <div className='show__calendar'>

        <button onClick={handlePrevMonth}>prev</button>
        <span>{date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}</span>
        <button onClick={handleNextMonth}>next</button>
      </div>
      <div className='show__event'>
        <ul>
          {events.map(event => (
            <li key={event.id}>
              {event.title} - {event.date.toString()}
              <button onClick={() => handleRemoveEvent(event.id)}>remove</button>
            </li>
          ))}
        </ul>
        <button onClick={() => handleAddEvent({ id: Date.now(), title: 'New Event', date: new Date() })}>
          Add Event
        </button>
      </div>
    </div>
  );
}

export default ShowCalendar;
