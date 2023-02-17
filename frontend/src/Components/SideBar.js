import { Link } from "react-router-dom";
import React ,{Component}from 'react';
import "./SideBar.css";

const SideBar = () => {
  return (
    <>
                <div className="sidenav">
                  <h1 className="games">Games</h1>
                    <Link to='/individualevents/event1'>Badminton</Link>
                     <Link to="/individualevents/event2">Chess</Link> 
                    <Link to="/individualevents/event3">Carrom</Link>
                    <Link to="/individualevents/event4">Swimming</Link>
                    <Link to="/individualevents/event5">Tennis</Link> 
                </div>
            
    </>
  )
}

export default SideBar

