import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Container,Typography,Grid,TextField,Button } from "@mui/material";


const TeacherUpdatingPage=()=>{

  const[name,setName]=useState('');
  const[stream,setStream]=useState('');
  const[subject,setSubject]=useState('');
  const[phoneNumber,setPhoneNumber]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[teachers,setTeachers]=useState([]);

  const {teacherId}=useParams();
  const navigate=useNavigate();

  const handleInputUpdate=async(e)=>{
    e.preventDefault()

  const response = await fetch(`http://http://35.227.150.39:8080/teacher/${teacherId}/save`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name,stream,subject,phoneNumber,email,password}),
    });

    if (response.ok) {
      console.log('Update successful');
      navigate("/admin")
  // Hide the alert after 3 seconds
      
    } else {
      
      console.error('Registration failed');
    }
  }



  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography variant="h5">Sign Up</Typography>
        <form onSubmit={handleInputUpdate}>
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
            Update
          </Button>
        </form>
     


      </div>
    </Container>
  );

}

export default TeacherUpdatingPage;