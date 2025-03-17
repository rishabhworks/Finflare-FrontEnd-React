import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Events = () => {
  const [events, setEvents] = useState([
    { id: 1, name: 'Tax and Toasted', description: 'A comedy roast show where comedians torch financial institutions!' },
    { id: 2, name: 'Tax Gambit', description: 'Bingo with a twist—90+ tax FAQs for the win!' },
  ]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/events')
      .then((response) => setEvents(response.data))
      .catch((error) => console.error('Error fetching events:', error));
  }, []);

  return (
    <Box sx={{ padding: { xs: '20px', sm: '50px' }, maxWidth: { xs: '100%', sm: '900px' }, margin: '0 auto' }}>
      <Typography variant="h2" gutterBottom sx={{ color: '#2e7d32', fontWeight: 'bold', fontSize: { xs: '1.5rem', sm: '2.5rem' } }}>
        💸 Our Events
      </Typography>
      <Typography paragraph sx={{ fontSize: { xs: '14px', sm: '18px' } }}>
        Where finance meets fun—cash in on these!
      </Typography>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <Typography variant="h4" sx={{ color: '#2e7d32', fontSize: { xs: '1.2rem', sm: '1.75rem' } }}>
              <Link
                to={`/events/${event.name.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-')}`}
                style={{ color: '#2e7d32', textDecoration: 'none' }}
              >
                {event.name}
              </Link>
            </Typography>
            <Typography sx={{ fontSize: { xs: '12px', sm: '16px' } }}>{event.description}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default Events;
