import React,{useEffect,useState} from 'react';
import './Admin.css';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
const Admin = () => {
    const[games,setGames]=useState([])
  useEffect(()=>{
 getGames()
  },[]);
  const getGames=async()=>{
    let  result=await fetch("http://localhost:8080/individualevents/event1",{
      method:'post',
      body:JSON.stringify({games}),
      headers:{
          'Content-Type':'application/json'
      }

  });
  let data=await result.json();
  setGames(data);
  console.log(data);
  }
  return (
    <>
     <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Tournamnet Name</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    {
        games.map((val,idx) => {
          return(
            <>
              <tr >
                <td >{idx+1}</td>
                
                            <td>{val.tournamentname}</td>
                            <td><a href="#" class="btn">Update</a></td>
                            <td><a href="#" class="btn">Delete</a></td>

              </tr>
            </>
          )
        })
      }
           <Button as={Link} to='/createtournament'>Register</Button>          
                </table>
            </div>
    </>
  )
}

export default Admin
