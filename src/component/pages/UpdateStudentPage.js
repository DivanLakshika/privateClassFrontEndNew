import { useParams,Link,useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Alert } from '@mui/material';

function UpdateStudentPage() {
  const { id, teacherIdReceived } = useParams();
  const navigate = useNavigate();
 
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [clz, setClz] = useState('');

  
  const handleInputChange3=async(e)=>{
    e.preventDefault()

  const response = await fetch(`http://localhost:8080/student/${id}/save`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name,address,phoneNumber,clz}),
    });

    if (response.ok) {
      console.log('Update successful');
              
       // Show the alert
       navigate(`/teacher/${teacherIdReceived}`);
    

  // Hide the alert after 3 seconds
     
    } else {
      
      console.log('Update failed!');

    //  console.error('Registration failed');
    }
  }


  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography variant="h5">Add Student Details</Typography>
        <form onSubmit={handleInputChange3}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Name"
                name="Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Address"
                name="Address"
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="Phone Number"
                type="Phone"
                value={phoneNumber}
                onChange={(e)=>setPhoneNumber(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="clz"
                name="clz"
                type="clz"
                value={clz}
                onChange={(e)=>setClz(e.target.value)}
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
            Update Student
          </Button>
          
         
        </form>
           
      </div>
    </Container>
  );

  // Now, you have access to the student's ID (id) in this component

  // ...
}
export default UpdateStudentPage;
/* <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
              <Grid item>
                <Link to={`/teacher/${teacherIdReceived}`} variant="body2">
                  Click the link to go to the teacher page
                </Link>
              </Grid>
            </Grid>
*/