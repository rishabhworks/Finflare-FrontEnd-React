import React from 'react';
import { Box, Typography } from '@mui/material';
import TaxGambitImage from '../images/taxGambit.png'; // Import the image

const TaxGambit = () => {
  return (
    <Box sx={{ padding: '50px', maxWidth: '900px', margin: '0 auto' }}>
      <Typography variant="h2" gutterBottom sx={{ color: '#2e7d32', fontWeight: 'bold' }}>
        💰 Tax Gambit
      </Typography>
      <Typography paragraph sx={{ fontSize: '18px' }}>
        A Bingo-style game where we answered 90+ tax FAQs! Fun, prizes, and financial wisdom all in one.
      </Typography>
      <Typography paragraph>
        <strong>Date:</strong> Feb 11th, 2025<br />
        <strong>Location:</strong> Sheridan College, HMC Campus<br />
        <strong>Details:</strong> Players shouted "Bingo!" while learning tax tricks. Over 90 tax questions were tackled, with prizes for the sharpest players!
      </Typography>
      <img
        src={TaxGambitImage}
        alt="Tax Gambit Event"
        style={{ maxWidth: '100%', borderRadius: '12px', border: '2px solid #ffca28', marginTop: '20px' }}
      />
    </Box>
  );
};

export default TaxGambit;