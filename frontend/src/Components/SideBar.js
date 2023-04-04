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
                    <h1 className="games">Results</h1>
                    <Link to='/individualevents/event1/result'>Badminton</Link>
                     <Link to="/individualevents/event2/result">Chess</Link> 
                    <Link to="/individualevents/event3/result">Carrom</Link>
                    <Link to="/individualevents/event4/result">Swimming</Link>
                    <Link to="/individualevents/event5/result">Tennis</Link> 
                </div>
            
    </>
  )
}

export default SideBar

