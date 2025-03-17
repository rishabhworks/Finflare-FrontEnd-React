import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: { xs: '20px', sm: '40px' }, maxWidth: { xs: '100%', sm: '900px' }, margin: '0 auto' }}>
      <Typography variant="h2" gutterBottom sx={{ color: '#2e7d32', fontWeight: 'bold', fontSize: { xs: '1.5rem', sm: '2.5rem' } }}>
        💰 Welcome to FinFlare 💰
      </Typography>
      <Typography variant="h5" paragraph sx={{ color: '#1a3c34', maxWidth: '700px', margin: '0 auto 20px', fontSize: { xs: '1rem', sm: '1.25rem' } }}>
        Grow your wealth with a grin! Catch <strong>Tax and Toasted</strong> (roasting financial flops) and <strong>Tax Gambit</strong> (Bingo meets 90+ tax FAQs).
      </Typography>
      <Button variant="contained" sx={{ padding: { xs: '10px 20px', sm: '15px 40px' }, fontSize: { xs: '14px', sm: '18px' }, fontWeight: 'bold' }}>
        Stack Your Cash!
      </Button>
    </Box>
  );
};

export default Home;