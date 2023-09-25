import React, { useState } from 'react';
import {useParams,Link} from 'react-router-dom';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
} from '@mui/material';


const StudentAdding = () => {

  const {teacherIdReceivedToStudentAdding} = useParams();   //after pass from app it should save that is why this used
  const teacherIdReceived=teacherIdReceivedToStudentAdding;
  
  /*  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a server or store locally)
    console.log(formData);
  }; */

  const[name,setName]=useState('');
  const[phoneNumber,setPhoneNumber]=useState('');
  const[address,setAddress]=useState('');
  const[clz,setClz]=useState('');
  
  

  const teacher={name,phoneNumber,address,clz};

  const handleInputChange2=async(e)=>{
    e.preventDefault()

  const response = await fetch(`http://35.227.150.39:8080/teacher/${teacherIdReceivedToStudentAdding}/student`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name,phoneNumber,address,clz}),
    });

    if (response.ok) {
      console.log('Student Registration Successful');
      alert("Student Registration Successful");
      setName('');
      setPhoneNumber('');
      setAddress('');
      setClz('');

    } else {
    //  console.error('Registration failed');
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography variant="h5">Add Student Details</Typography>
        <form onSubmit={handleInputChange2}>
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
            Add Student
          </Button>
          
         
        </form>
            <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
              <Grid item>
                <Link to={`/teacher/${teacherIdReceived}`} variant="body2">
                  Click to go back
                </Link>
              </Grid>
            </Grid>
      </div>
    </Container>
  );
};

export default StudentAdding;
