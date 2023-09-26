import React, { useEffect, useState } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,IconButton,Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Admin() {
  const [teachers, setTeachers] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    // Fetch teacher data from the Spring Boot API
    fetch('http://localhost:8080/teacher/getAll') // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((data) => setTeachers(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleDelete = (teacherId) => {
    // Send a DELETE request to your backend API to delete the teacher
    fetch(`http://localhost:8080/teacher/${teacherId}/delete`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          // Remove the deleted teacher from the state
          setTeachers((prevTeachers) => prevTeachers.filter((teacher) => teacher.id !== teacherId));
        } else {
          console.error('Failed to delete teacher');
        }
      })
      .catch((error) => console.error('Error deleting teacher:', error));
  };

  const handleUpdate =(teacherId)=> {
      
        navigate(`/teacher/${teacherId}/update`)

  }

  return (
    <Container>
      <Typography variant="h4">List of Teachers</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Stream</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teachers.map((teacher) => (
              <TableRow key={teacher.id}>
                <TableCell>{teacher.name}</TableCell>
                <TableCell>{teacher.stream}</TableCell>
                <TableCell>{teacher.subject}</TableCell>
                <TableCell>{teacher.phoneNumber}</TableCell>
                <TableCell>{teacher.email}</TableCell>
                <TableCell>
                  {/* Add buttons for update and delete */}
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                      handleUpdate(teacher.id);
                      // Handle teacher update (navigate to update page)
                    }}
                  >
                    {/* Add an icon for update, e.g., EditIcon */}
                    Update
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => {
                      // Call the handleDelete function to delete the teacher
                      handleDelete(teacher.id);
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Admin;
