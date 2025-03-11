import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const Contact = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Message Sent:', { name, message });
    setName('');
    setMessage('');
  };

  return (
    <Box sx={{ padding: '50px', maxWidth: '700px', margin: '0 auto' }}>
      <Typography variant="h2" gutterBottom sx={{ color: '#2e7d32', fontWeight: 'bold' }}>
        💰 Contact Us
      </Typography>
      <Typography paragraph sx={{ fontSize: '18px' }}>
        Drop us a note—your fortune awaits!
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Your Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
          sx={{ backgroundColor: '#fff3cc', borderRadius: '8px', '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#ffca28' } } }}
        />
        <TextField
          label="Your Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          margin="normal"
          sx={{ backgroundColor: '#fff3cc', borderRadius: '8px', '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#ffca28' } } }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ marginTop: '25px', padding: '15px 40px', fontSize: '18px', fontWeight: 'bold' }}
        >
          Send It! 💸
        </Button>
      </form>
    </Box>
  );
};

export default Contact;


  