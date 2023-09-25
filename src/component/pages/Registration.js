import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Link,Alert
} from '@mui/material';

const Registration = () => {
 /* const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a server)
    console.log(formData);
  }; */
  const[name,setName]=useState('');
  const[stream,setStream]=useState('');
  const[subject,setSubject]=useState('');
  const[phoneNumber,setPhoneNumber]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[teachers,setTeachers]=useState([]);
  const [registartionSuccess, setRegistrationSuccess] = useState(false);
  const [registartionFailed, setRegistrationFailed] = useState(false);

  const teacher={name,stream,subject,phoneNumber,email,password};

  const handleInputChange=async(e)=>{
    e.preventDefault()

  const response = await fetch('http://http://35.227.150.39:8080/teacher/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name,stream,subject,phoneNumber,email,password}),
    });

    if (response.ok) {
      console.log('Registration successful');
      setRegistrationSuccess(true); // Show the alert

      setName('');
      setStream('');
      setSubject('');
      setPhoneNumber('');
      setEmail('');
      setPassword('');

  // Hide the alert after 3 seconds
      setTimeout(() => {
         setRegistrationSuccess(false);
        }, 3000);
    } else {
      
      setRegistrationFailed(true);
      setTimeout(() => {
        setRegistrationFailed(false);
       }, 3000);

    //  console.error('Registration failed');
    }
  }


  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography variant="h5">Sign Up</Typography>
        <form onSubmit={handleInputChange}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={15}>
              <TextField
                fullWidth
                label="Name"
                name="Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} sm={15}>
              <TextField
                fullWidth
                label="Subject"
                name="subject"
                value={subject}
                onChange={(e)=>setSubject(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Subject-Stream(O/L,A/L)"
                name="stream"
                value={stream}
                onChange={(e)=>setStream(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                value={phoneNumber}
                onChange={(e)=>setPhoneNumber(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
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
            Sign Up
          </Button>
        </form>
        <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
          <Grid item>
            <Link href="/loginForm" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
          {registartionSuccess && (
              <Alert severity="success" sx={{ mt: 2 }}>
           Registration successful
          </Alert>
          )}
          {registartionFailed && (
              <Alert severity="error" sx={{ mt: 2 }}>
           Registartion failed. Please try again.
          </Alert>
          )}


      </div>
    </Container>
  );
};

export default Registration;
