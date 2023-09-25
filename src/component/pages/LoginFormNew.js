import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginFormNew = () => {


const [email, setEmail] = useState('');
const [password1, setPassword1] = useState('');
const [loginSuccess, setLoginSuccess] = useState(false);
const [loginFiled, setLoginFailed] = useState(false);
//const history = useHistory(); // create new teacher page
const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();

  // Send data to the backend for authentication
  try{
  const response = await fetch('http://35.227.150.39:8080/teacher/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email,password1}),
  });

  if (response.ok) {
    
    const userData = await response.json();
    const teacherIdReceived= userData;
    console.log(teacherIdReceived);
        if(teacherIdReceived){  // need to encode because input is string
          navigate(`/teacher/${teacherIdReceived}`); 
        }
        else{
          console.error('teacher id not found');
        }


    console.log('Login successful');
    setLoginSuccess(true); // Show the alert

          setEmail('');
          setPassword1('');

  // Hide the alert after 3 seconds
          setTimeout(() => {
            setLoginSuccess(false);
          }, 3000);

  } 
  
  else {
    
    setLoginFailed(true);

    setTimeout(() => {
      setLoginFailed(false);
    }, 3000);
    
  //  console.error('Login failed');
  }

 
  } catch(error){
    console.error('An error occurred:', error);
  }
  

};



  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography variant="h5">Login</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
                required
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
          >
            Login
          </Button>
             {loginSuccess && (       //LOGIN SUCCESSFUL ALERT
             <Alert severity="success" sx={{ mt: 2 }}> 
               Login successful
            </Alert>
            )}
            {loginFiled && (       //LOGIN failed ALERT
             <Alert severity="error" sx={{ mt: 2 }}> 
               Login failed. Please try again. 
            </Alert>
            )}


        </form>
      </div>
    </Container>
  );
};

export default LoginFormNew;
