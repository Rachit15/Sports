import React,{useEffect,useState} from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import { Form, Input, message } from 'antd';

const BadmintonResult = () => {
  const[games,setGames]=useState([]);
  useEffect(()=>{
 getGames()
  },[]);
  console.log(games);
  const getGames=async()=>{
    let  result=await fetch("http://localhost:8080/individualevents/event1/result",{
      method:'post',
      body:JSON.stringify({games}),
      headers:{
          'Content-Type':'application/json'
      }

  });
  let data=await result.json();
  if(result.status===422)
  {
    message.error(data.message);
  }
  else{
  setGames(data);
  console.log(data);
  }
  }
  return (
    <>
     <Table striped bordered hover variant='dark'  borderColor="success">
      
      <tr>
        <th>Sr No.</th>
        
        <th>Tournament Name</th>
        
        
        
        <th> Winner</th>
        <th>RunnerUp1</th>
        <th>RunnerUp2</th>

      </tr>
      {
        games.map((val,idx) => {
          return(
            <>
              <tr >
                <td >{idx+1}</td>
                
                <td>{val.selectedTournament}</td>
            
              <td>{val.selectedWinner}</td>
                <td>{val.selectedRunner1}</td>
                <td>{val.selectedRunner2}</td>

              </tr>
            </>
          )
        })
      }
      </Table>
    </>
      
    
  )
}

export default BadmintonResult
