import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Registration from './component/pages/Registration';
import Home from './component/pages/Home';
import NavBar from './component/tabs/NavBar';
import LoginFormNew from './component/pages/LoginFormNew';
import StudentAdding from './component/pages/StudentAdding';
import TeacherPage from './component/pages/TeacherPage';
import UpdateStudentPage from './component/pages/UpdateStudentPage';
import Admin from './component/pages/Admin';
import TeacherUpdatingPage from './component/pages/TeacherUpdatingPage';


function App(){
  return (
    <div>
      
      <Router>
       <NavBar />
       <br></br>
   
    <Routes>
     
        <Route exact path='/'  element={<Home />} />
        <Route path='/registrationForm' element={<Registration />} />
        <Route path='/loginForm' element={<LoginFormNew/>} />
        <Route path='/student/:teacherIdReceivedToStudentAdding' element={<StudentAdding/>} />
        <Route path="/teacher/:teacherIdReceived" element={<TeacherPage/>} />
        <Route path="/student/update/:id/:teacherIdReceived" element={<UpdateStudentPage />} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/teacher/:teacherId/update' element={<TeacherUpdatingPage/>} />

    </Routes>
</Router>
    </div>
  );
}

export default App;

