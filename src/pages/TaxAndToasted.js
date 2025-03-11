import React from 'react';
import { Box, Typography } from '@mui/material';
import TaxToastedImage from '../images/taxtoasted.png';

const TaxAndToasted = () => {
  return (
    <Box sx={{ padding: '50px', maxWidth: '900px', margin: '0 auto' }}>
      <Typography variant="h2" gutterBottom sx={{ color: '#2e7d32', fontWeight: 'bold' }}>
        💸 Tax and Toasted
      </Typography>
      <Typography paragraph sx={{ fontSize: '18px' }}>
        A comedy roast show where hilarious comedians took down financial institutions! Laugh your way to tax enlightenment.
      </Typography>
      <Typography paragraph>
        <strong>Date:</strong> December 3rd, 2024<br />
        <strong>Location:</strong> Sheridan College, HMC Campus<br />
        <strong>Details:</strong> Hosted by FinFlare, this event featured top comedians roasting banks, tax loopholes, and the CRA. Attendees left with stitches in their sides and smarter about taxes!
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