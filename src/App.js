import './App.css';
import Home from './Pages/Home';
import ExerciseDetail from './Pages/ExerciseDetail';
import Footer from './Components/Footer';

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
// import { Box } from '@mui/material';





function App() {
  return (
    <div width="400px" sx={{width:{xl:'1488px'}}} m="auto">
     
        <Header/>
        <Routes>
          <Route path={'/'} element={<Home></Home>}></Route>
          <Route path={'/exercise/:id'} element={<ExerciseDetail></ExerciseDetail>}></Route>
       </Routes>
      < Footer/>
     
    
    </div>
  );
}

export default App;
