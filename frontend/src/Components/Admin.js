import React,{useEffect,useState} from 'react';
import './Admin.css';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const Admin = ({setisLoggedin}) => {
  const {id}=useParams();
  console.log(id);
    const[games,setGames]=useState([])
  useEffect(()=>{
    
 getGames()
  },[]);
 
  const getGames=async()=>{
    try{
    let  result=await fetch("/adminpanel",{
      method:'post',
      body:JSON.stringify({games}),
      headers:{
        Accept:'application/json',
          'Content-Type':'application/json'
      },
      credentials:"include"

  });
  let data=await result.json();
  console.log(data);
  if(result.status===401)
  {
    console.log("big error");
    window.location='/arrange';
  }
  setisLoggedin(true);
  setGames(data);
  console.log(data);
}
catch(err)
{
  window.location='/arrange';
}
  
  }
  const Delete=async()=>{
    console.log("hi");
    const result=await fetch(`/user/delete/${id}`,{
      method:'get',
      
      headers:{
        Accept:'application/json',
          'Content-Type':'application/json'
      },
      

  });
const data=await result.json();
window.location='/adminpanel'
  }
  return (
    <>
      
     <div className="table-container">
                <table style={{paddingBottom:"5px"}}>
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
                            {/* <Link to='/edituser'> */}
                            <td><a href={`/user/edit/${val.TID}`} class="btn">Update</a></td>
                            {/* </Link> */}
                            {/* <Link to='/edituser'> */}
                            <td><a href={`/user/delete/${val.TID}`} class="btn" onClick={Delete}>Delete</a></td>
                            {/* </Link> */}
              </tr>
            </>
          )
        })
      }
      </table>
      </div>
      
           <Button as={Link} style={{marginLeft:"50%",paddingTop:"5px"}}to='/createtournament'>Register</Button>          
                 
            
    </>
  )
}

export default Admin;
