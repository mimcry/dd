import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useSnackbar } from 'notistack';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';

const Contact = () => {
  const form = useRef();
  const { enqueueSnackbar } = useSnackbar();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_26ylv57', 'template_llc1nth', form.current, 'UbhxEDqoO6dxuMe2M')
      .then(
        () => {
          enqueueSnackbar('Email sent successfully!', { variant: 'success' });
          form.current.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.error('FAILED...', error.text);
          enqueueSnackbar('Failed to send email. Please try again later.', { variant: 'error' });
        },
      );
  };

  return (
    <div id="Contact">
    <Container maxWidth="sm" sx={{ backgroundColor: '#081b29', padding: '2rem', borderRadius: '8px' }}>
   <Typography
             sx={{
               color: "white",
               textAlign: "center",
               fontSize: "1.9rem",
               mt:10,mb:6

             }}
           >
             Contact📲  <span style={{color:"#00abf0"}}>Me</span>
           </Typography>
      <form ref={form} onSubmit={sendEmail}>
        <TextField
          label="Subject"
          name="email_subject"
          fullWidth
          required
          margin="normal"
          InputLabelProps={{ style: { color: '#ffffff' } }}
          InputProps={{ style: { color: '#ffffff' } }}
          sx={{ backgroundColor: '#0f2d40', borderRadius: '4px' }}
        />
        <TextField
          label="Email"
          name="user_email"
          type="email"
          fullWidth
          required
          margin="normal"
          InputLabelProps={{ style: { color: '#ffffff' } }}
          InputProps={{ style: { color: '#ffffff' } }}
          sx={{ backgroundColor: '#0f2d40', borderRadius: '4px' }}
        />
        <TextField
          label="Message"
          name="message"
          multiline
          rows={4}
          fullWidth
          required
          margin="normal"
          InputLabelProps={{ style: { color: '#ffffff' } }}
          InputProps={{ style: { color: '#ffffff' } }}
          sx={{ backgroundColor: '#0f2d40', borderRadius: '4px' }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ backgroundColor: '#e53935', color: '#ffffff', marginTop: '1rem' }}
          startIcon={<EmailIcon />}
        >
          Send Email
        </Button>
      </form>
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
       
        <Button
          variant="contained"
          color="success"
          startIcon={<WhatsAppIcon />}
          sx={{ flexGrow: 1, marginRight: '0.5rem', backgroundColor: '#25D366' }}
          href="https://wa.me/9860428022"
        >
          WhatsApp
        </Button>

        
        <Button
          variant="contained"
          color="secondary"
          startIcon={<PhoneIcon />}
          sx={{ flexGrow: 1, marginLeft: '0.5rem', backgroundColor: '#007BFF' }}
          href="tel:9860428022" 
        >
          Call
        </Button>
      </Box>
    </Container></div>
  );
};

export default Contact;
