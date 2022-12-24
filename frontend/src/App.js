import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter,Routes,Route} from "react-router-dom";
import NavbarComp from './Components/NavbarComp';
import RSlider from './Components/RSlider';
import Arrange from './Components/Arrange';
import Home from './Components/Home';





function App() {
  return (
    <>
    
     
      <BrowserRouter>
      <NavbarComp/>
      
      <Routes>
        
      <Route  exact path='/' element={<Home/>}></Route> 
      
      <Route  exact path='/teamevents' element={<h1>Team events</h1>}></Route> 
      <Route  exact path='/individualevents' element={<h1>Individual Events</h1>}></Route> 
      <Route  exact path='/aboutus' element={<h1>About us</h1>}></Route> 
         <Route  exact path='/arrange' element={<Arrange/>}></Route> 


      
    
      
      
        </Routes>
        </BrowserRouter>
      
      </>  
    
    
  );
}

export default App;
