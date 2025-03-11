import React, { useEffect, useState } from "react";
import axios from "axios";

const EventsList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/events")
      .then(response => setEvents(response.data))
      .catch(error => console.error("Error fetching events:", error));
  }, []);

  return (
    <div>
      <h2>Upcoming Events</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <strong>{event.name}</strong>: {event.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventsList;
