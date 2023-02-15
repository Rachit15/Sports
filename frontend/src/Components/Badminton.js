
import React,{useEffect,useState} from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Badminton = () => {
  <h1>Badminton</h1>
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
    <Table striped bordered hover variant='dark'  borderColor="success">
      <tr>
        <th>Sr No.</th>
        <th>ID</th>
        <th>Tournament Name</th>
        <th>type</th>
      </tr>
      {
        games.map((val,idx) => {
          return(
            <>
              <tr >
                <td >{idx+1}</td>
                <td>{val.TID}</td>
                <td>{val.tournamentname}</td>
                <td>{val.selectedOption}</td>
              </tr>
            </>
          )
        })
      }
    </Table>
    </>
  )
}

export default Badminton;
