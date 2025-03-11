import React from 'react';
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer>
      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
        💸 © 2025 FinFlare. Stack your cash with flair!
      </Typography>
      <Typography variant="body2" sx={{ marginTop: '10px' }}>
        Created by Rishabh Mishra with 💰 & ❤️
      </Typography>
    </footer>
  );
};

export default Footer;
