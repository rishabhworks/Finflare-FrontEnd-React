import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="sticky" sx={{ background: 'linear-gradient(45deg, #2e7d32, #4caf50)', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ffca28', letterSpacing: '2px' }}>
          💰 FinFlare
        </Typography>
        <div>
          <Button sx={{ color: '#ffca28', fontWeight: 'bold', margin: '0 15px' }} component={Link} to="/">Home</Button>
          <Button sx={{ color: '#ffca28', fontWeight: 'bold', margin: '0 15px' }} component={Link} to="/events">Events</Button>
          <Button sx={{ color: '#ffca28', fontWeight: 'bold', margin: '0 15px' }} component={Link} to="/resources">Resources</Button>
          <Button sx={{ color: '#ffca28', fontWeight: 'bold', margin: '0 15px' }} component={Link} to="/contact">Contact</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;