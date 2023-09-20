/*import React from 'react';
import { List, ListItem, ListItemText, Divider } from '@mui/material';
import { useState } from 'react';

//don't want

const StudentList = () => {
  const[students,setStudents]=useState([]);
  React.useEffect(()=>{
    fetch("http://localhost:8080/teacher/{teacherId}/students")
    .then((response)=>(response).json())
    .then((data)=>
      setStudents(data))
    .catch((error)=>console.error("Error fetching data: ",error));
    
  },[]);

  return (
    <List>
      {students.map(student => (
        <div key={student.index}>
          <ListItem>
            <ListItemText
              primary={`${student.name}`}
              secondary={`Phone Number: ${student.phoneNumber}`}
            />
          </ListItem>
          <Divider />
        </div>
      ))}
    </List>
  );
};

export default StudentList;
*/