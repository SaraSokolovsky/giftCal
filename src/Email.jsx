import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Box, Button, TextField, Typography, Container, Grid } from '@mui/material';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = () => {
    const templateParams = {
      to_name: 'Your Name', // שם בעל העסק
      from_name: name, // שם השולח
      from_email: email, // דוא"ל השולח
      message: message, // התוכן שהוזן על ידי המשתמש
    };

    emailjs.send('service_2wer28j', 'template_tcbcsin', templateParams, 'm2UsFRBk2Ph5iv8qV')
      .then((response) => {
        console.log('Email sent successfully:', response);
      })
      .catch((err) => {
        console.error('Error sending email:', err);
      });
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Box
        sx={{
          backgroundColor: 'white',
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" gutterBottom align="center">
          צור קשר עם בעל העסק
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="שמך"
              value={name}
              onChange={(e) => setName(e.target.value)}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="כתובת אימייל"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              type="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="הודעה"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              variant="outlined"
              multiline
              rows={4}
            />
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
          <Button variant="contained" color="primary" onClick={sendEmail}>
            שלח אימייל
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactForm;
