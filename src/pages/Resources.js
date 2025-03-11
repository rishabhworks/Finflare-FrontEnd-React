import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Resources = () => {
  return (
    <Box sx={{ padding: '50px', maxWidth: '900px', margin: '0 auto' }}>
      <Typography variant="h2" gutterBottom sx={{ color: '#2e7d32', fontWeight: 'bold' }}>
        💸 Financial Resources
      </Typography>
      <Typography paragraph sx={{ fontSize: '18px' }}>
        Your vault of money-making wisdom!
      </Typography>
      <ul>
        <li>
          <Typography variant="h5" sx={{ color: '#2e7d32' }}>
            <Link to="/resources/tax-tricks" style={{ color: '#2e7d32', textDecoration: 'none' }}>
              Tax Tricks 101
            </Link>
          </Typography>
          <Typography>Crack the tax code with swagger.</Typography>
        </li>
        <li>
          <Typography variant="h5" sx={{ color: '#2e7d32' }}>
            <Link to="/resources/credit-card-hacks" style={{ color: '#2e7d32', textDecoration: 'none' }}>
              Credit Card Hacks
            </Link>
          </Typography>
          <Typography>Rake in rewards like a pro.</Typography>
        </li>
      </ul>
    </Box>
  );
};

export default Resources;


  