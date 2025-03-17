import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="sticky" sx={{ background: 'linear-gradient(45deg, #2e7d32, #4caf50)', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)' }}>
      <Toolbar sx={{ 
        flexDirection: { xs: 'column', sm: 'row' }, 
        justifyContent: 'space-between', 
        padding: { xs: '10px', sm: '15px' }
      }}>
        <Typography 
          variant="h4" 
          sx={{ fontWeight: 'bold', color: '#ffca28', letterSpacing: '2px', mb: { xs: 1, sm: 0 } }}
          component={Link} // Make it a Link component
          to="/" // Redirect to home page
          style={{ textDecoration: 'none', color: '#ffca28' }} // Keep styling consistent
        >
          💰 FinFlare
        </Typography>
        <div sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
          <Button sx={{ color: '#ffca28', fontWeight: 'bold', margin: { xs: '5px 0', sm: '0 15px' } }} component={Link} to="/">Home</Button>
          <Button sx={{ color: '#ffca28', fontWeight: 'bold', margin: { xs: '5px 0', sm: '0 15px' } }} component={Link} to="/events">Events</Button>
          <Button sx={{ color: '#ffca28', fontWeight: 'bold', margin: { xs: '5px 0', sm: '0 15px' } }} component={Link} to="/resources">Resources</Button>
          <Button sx={{ color: '#ffca28', fontWeight: 'bold', margin: { xs: '5px 0', sm: '0 15px' } }} component={Link} to="/contact">Contact</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;