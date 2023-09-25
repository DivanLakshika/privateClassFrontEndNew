// UserPage.js
import React, { useEffect, useState } from 'react';
import { useParams,Link, useNavigate } from 'react-router-dom';
import { CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,Box,Grid, Button} from '@mui/material';

function TeacherPage() {
  const {teacherIdReceived} = useParams();
  const [customerData, setCustomerData] = useState([]);
  const[loading,setLoading]=useState(true);
  const navigate = useNavigate();
  // delete students
  const handleDelete = async (id) => {
    try {
     
      const response = await fetch(`http://http://35.227.150.39:8080/student/${id}/delete`, {
        method: 'DELETE',
      });
      if (response.ok) {
         setCustomerData((prevData) => prevData.filter((item) => item.id !== id));
        // Refresh the data after deletion
       // fetchCustomerData();
      } else {
        console.error('Failed to delete the item');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  const handleUpdate = (id) => {

      navigate(`/student/update/${id}/${teacherIdReceived}`);
    // You can implement your update logic here, e.g., navigate to an update page.
    // You can use React Router's useHistory for navigation.
    // Example: history.push(`/student/${teacherIdReceived}/update/${id}`);
  };




  
  //got to id page when login happend
  useEffect(() => {
    // Fetch customer-specific data based on customerId from the backend
    async function fetchCustomerData() {
      try {
        const response = await fetch(`http://http://35.227.150.39:8080/${teacherIdReceived}/students`);
        if (response.ok) {
          const data = await response.json();
          setCustomerData(data);
          setLoading(false);
        } else {
          console.error('Failed to fetch customer data');
        }
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    }

    fetchCustomerData();
  }, [teacherIdReceived]);

  if (loading) {
      // You can display a loading indicator here while fetching data //loading
     return  <div style={{ textAlign: 'center', marginTop: '20px' }}>   
              <CircularProgress />
              <Typography variant="body1">Loading...</Typography>
             </div>;
    
    
    
  } else if (customerData.length === 0) {
    // Handle case when no data is available
    return <div>
                <Grid container justifyContent="flex-start" sx={{ mt: 0 }}> 
                <Grid item>
                  <Link to={`/student/${teacherIdReceived}`} variant="body2">
                    Click the link to add new students 
                  </Link>
                </Grid>
              </Grid>
              <Typography variant="body1">No data available for this teacher.</Typography>;
           </div> 
   } else {
      return (
        
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="calc(10vh - 64px)">
          
          <Typography variant="h4">Teacher Page</Typography>
          <div>
              <Grid container justifyContent="flex-start" sx={{ mt: 0 }}> 
              <Grid item>
                <Link to={`/student/${teacherIdReceived}`} variant="body2">
                  Click the link to add new students 
                </Link>
              </Grid>
            </Grid>
            </div>
            <br></br>
          <Typography variant="body1">Teacher ID : {teacherIdReceived} : Students details table </Typography>
          {/* Render the data */}
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Phone Number</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>Class</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {customerData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.phoneNumber}</TableCell>
                    <TableCell>{item.address}</TableCell>
                    <TableCell>{item.clz}</TableCell>

                    <TableCell>
                        <Button variant="contained" color="primary" onClick={() => handleUpdate(item.id)}>
                          Update
                        </Button>
                    </TableCell> 
                    <TableCell>
                        <Button variant="contained" color="secondary" onClick={() => handleDelete(item.id)}>
                          Delete
                        </Button>
                    </TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      );
    }
        
  
 
}

export default TeacherPage;
//