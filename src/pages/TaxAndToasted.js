import React from 'react';
import { Box, Typography } from '@mui/material';
import TaxToastedImage from '../images/taxtoasted.png';

const TaxAndToasted = () => {
  return (
    <Box sx={{ padding: { xs: '20px', sm: '50px' }, maxWidth: { xs: '100%', sm: '900px' }, margin: '0 auto' }}>
      <Typography variant="h2" gutterBottom sx={{ color: '#2e7d32', fontWeight: 'bold', fontSize: { xs: '1.5rem', sm: '2.5rem' } }}>
        💸 Tax and Toasted
      </Typography>
      <Typography paragraph sx={{ fontSize: { xs: '14px', sm: '18px' } }}>
        A comedy roast show where hilarious comedians took down financial institutions! Laugh your way to tax enlightenment.
      </Typography>
      <Typography paragraph sx={{ fontSize: { xs: '12px', sm: '16px' } }}>
        <strong>Date:</strong> (Past event—add the real date here, e.g., March 5, 2025)<br />
        <strong>Location:</strong> (Add the venue here, e.g., The Laugh Factory)<br />
        <strong>Details:</strong> Hosted by FinFlare, this event featured top comedians roasting banks, tax loopholes, and the IRS. Attendees left with stitches in their sides and smarter about taxes!
      </Typography>
      <img
        src={TaxToastedImage}
        alt="Tax and Toasted Event"
        style={{ maxWidth: '100%', borderRadius: '12px', border: '2px solid #ffca28', marginTop: '20px' }}
      />
    </Box>
  );
};

export default TaxAndToasted;