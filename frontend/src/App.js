import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter,Routes,Route} from "react-router-dom";
import NavbarComp from './Components/NavbarComp';
import RSlider from './Components/RSlider';
import Arrange from './Components/Arrange';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import TournamentForm from './Components/TournamentForm';
import CreateTournament from './Components/CreateTournament';
import Badminton from './Components/Badminton';
import Chess from './Components/Chess';
import Swimming from './Components/Swimming';
import Carrom from './Components/Carrom';
import Tennis from './Components/Tennis';
import SideBar from './Components/SideBar';
import Register from './Components/Register';
import Admin from './Components/Admin';
import ForgetPassword from './Components/ForgetPassword';
import OTP from './Components/OTP';
import ResetPassword from './Components/ResetPassword';




function App() {
  return (
    <>
    
     
      <BrowserRouter>
      <NavbarComp/>
      
      <Routes>
        
      <Route  exact path='/' element={<Home/>}></Route> 
      
      <Route  exact path='/teamevents' element={<h1>Team events</h1>}></Route> 
     
      <Route  exact path='/aboutus' element={<h1>About us</h1>}></Route> 
         <Route  exact path='/arrange' element={<Arrange/>}></Route> 
          <Route  exact path='/register' element={<SignUp/>}></Route>  
          <Route exact path='/adminpanel' element={<Admin/>}></Route>
          <Route  exact path='/createtournament' element={<CreateTournament/>}></Route>  
          <Route  exact path='/participant' element={<Register/>}></Route>  
          <Route  exact path='/individualevents/event1' element={<Badminton/>}></Route>  
          <Route  exact path='/individualevents/event2' element={<Chess/>}></Route>  
          <Route  exact path='/individualevents/event3' element={<Swimming/>}></Route>  
          <Route  exact path='/individualevents/event4' element={<Carrom/>}></Route>  
          <Route  exact path='/individualevents/event5' element={<Tennis/>}></Route>  
          <Route  exact path='/individualevents/event5' element={<Tennis/>}></Route> 
          <Route  exact path='/forgetpassword' element={<ForgetPassword/>}></Route> 
      
          <Route  exact path='/otp' element={<OTP/>}></Route> 
          <Route  exact path='/resetpassword' element={<ResetPassword/>}></Route> 
        </Routes>
        </BrowserRouter>
      
      </>  
    
    
  );
}

export default App;
