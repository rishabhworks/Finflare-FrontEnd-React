import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: '50px', maxWidth: '900px', margin: '0 auto' }}>
      <Typography variant="h2" gutterBottom sx={{ color: '#2e7d32', fontWeight: 'bold' }}>
        💰 Welcome to FinFlare 💰
      </Typography>
      <Typography variant="h5" paragraph sx={{ color: '#1a3c34', maxWidth: '700px', margin: '0 auto 20px' }}>
        Grow your wealth with a grin! Catch <strong>Tax and Toasted</strong> (roasting financial flops) and <strong>Tax Gambit</strong> (Bingo meets 90+ tax FAQs).
      </Typography>
      <Button variant="contained" sx={{ padding: '15px 40px', fontSize: '18px', fontWeight: 'bold' }}>
        Stack Your Cash!
      </Button>
    </Box>
  );
};

export default Home;