import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate=useNavigate();
  const handleRegister=()=>{
    navigate('/registrationForm');

  }
  const handleLogin=()=>{
    navigate('/loginForm');
  }


  return (
    <Container maxWidth="sm">
      <Typography variant="h2" align="center" style={{ marginTop: '2rem' }}>
        Welcome to Private Tutors
      </Typography>
      <Typography variant="h5" align="center" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
        We are a private tutor website, and we help you connect with private tutors and their students.
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Registration can be done by clicking the Registration tab, and you can log in using the Login tab.
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Please choose the option that suits you best.
      </Typography>
      <Typography variant="h4" align="center" style={{ marginTop: '2rem' }}>
        Thank you for visiting our website!
      </Typography>
      <Typography variant="body1" align="center" style={{ marginTop: '2rem', marginBottom: '1rem' }}>
        Contact Details:
        <br />
        Email: lakshikadivan@gmail.com
        <br />
        Phone: +94719314990
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="contained" color="primary" onClick={handleRegister}>
          Register
        </Button>
        <Button variant="contained" color="secondary" style={{ marginLeft: '1rem' }} onClick={handleLogin}>
          Login
        </Button>
      </div>
    </Container>
  );
};

export default Home;