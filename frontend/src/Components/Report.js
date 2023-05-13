import React,{useEffect,useState} from 'react';
import Table from 'react-bootstrap/Table';
import './Report.css'

import {
  Button,
  Checkbox,
  Col,
  Form,
  InputNumber,
  Radio,
  Rate,
  Row,
  Select,
  Slider,
  Switch,
  Upload,
  message
} from 'antd';
const { Option } = Select;
const Report = () => {
  const [year,setYear]=useState("");
    const[participant,setParticipant]=useState([]);
    const[chessparticipant,setchessParticipant]=useState([]);
    const[carromparticipant,setcarromParticipant]=useState([]);
    const[swimmingparticipant,setswimmingParticipant]=useState([]);
    const[tennisparticipant,settennisParticipant]=useState([]);
    const[badmintonmalecount,setBadmintonMaleCount]=useState(0);
    const[badmintonfemalecount,setBadmintonFemaleCount]=useState(0);
    const[chessmalecount,setChessMaleCount]=useState(0);
    const[chessfemalecount,setChessFemaleCount]=useState(0);
    const[carrommalecount,setCarromMaleCount]=useState(0);
    const[carromfemalecount,setCarromFemaleCount]=useState(0);
    const[swimmingmalecount,setSwimmingMaleCount]=useState(0);
    const[swimmingfemalecount,setSwimmingFemaleCount]=useState(0);
    const[tennismalecount,setTennisMaleCount]=useState(0);
    const[tennisfemalecount,setTennisFemaleCount]=useState(0);
    const[isBadminton,setIsBadminton]=useState(false);
    const[isChess,setIsChess]=useState(false);
    const[isCarrom,setIsCarrom]=useState(false);
    const[isSwimming,setIsSwimming]=useState(false);
    const[isTennis,setIsTennis]=useState(false);
    const[isDetails,setIsDetails]=useState(false);
    const[isDetails1,setIsDetails1]=useState(false);
    const[isDetails2,setIsDetails2]=useState(false);
    const[isDetails3,setIsDetails3]=useState(false);
    const[isDetails4,setIsDetails4]=useState(false);
  useEffect(()=>{
    getBadmintonCount();
    getChessCount();
    getCarromCount();
    getSwimmingCount();
    getTennisCount();
 getBadmintonParticipant();
 getChessParticipant();
 getCarromParticipant();
 getSwimmingParticipant();
 getTennisParticipant();
  },[]);
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Report.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Report.pdf';
            alink.click();
        })
    })
}
  const handleYearChange = (value) => {
    console.log('value',value);
    if (value === '2023') {
      setIsDetails(true);
      setIsDetails1(false);
      setIsDetails2(false);
      setIsDetails3(false);
      setIsDetails4(false);
      
    } else if (value === '2022') {
      setIsDetails(false);
      setIsDetails1(true);
      setIsDetails2(false);
      setIsDetails3(false);
      setIsDetails4(false);  
    } 
    else if (value === '2024') {
      setIsDetails(false);
      setIsDetails1(false);
      setIsDetails2(true);
      setIsDetails3(false);
      setIsDetails4(false);
      
    } 
    else if (value === '2025') {
      setIsDetails(false);
      setIsDetails1(false);
      setIsDetails2(false);
      setIsDetails3(true);
      setIsDetails4(false);
      
    } 
    else if (value === '2026') {
      setIsDetails(false);
      setIsDetails1(false);
      setIsDetails2(false);
      setIsDetails3(false);
      setIsDetails4(true);
    } 
    // else {
    //   setIsDetails(false);
    //   setOtherValue(false);
    // }
  };
  console.log(year);
  if(badmintonmalecount&&badmintonfemalecount)
  {
  console.log('femalecount',badmintonfemalecount);
  console.log('malecount',badmintonmalecount);
  }
  const handleBadminton=async()=>{
    console.log("In handlebadminton")
    setIsBadminton(true);
    setIsChess(false);
    setIsCarrom(false);
    setIsSwimming(false);
    setIsTennis(false);
  }
  const handleChess=async()=>{
    console.log("In handle Chess")
    setIsBadminton(false);
    setIsChess(true);
    setIsCarrom(false);
    setIsSwimming(false);
    setIsTennis(false);
  }
  const handleCarrom=async()=>{
    console.log("In handlecarrom")
    setIsBadminton(false);
    setIsChess(false);
    setIsCarrom(true);
    setIsSwimming(false);
    setIsTennis(false);
  }
  const handleSwimming=async()=>{
    console.log("In handleSwimming")
    setIsBadminton(false);
    setIsChess(false);
    setIsCarrom(false);
    setIsSwimming(true);
    setIsTennis(false);
  }
  const handleTennis=async()=>{
    console.log("In handletennis")
    setIsBadminton(false);
    setIsChess(false);
    setIsCarrom(false);
    setIsSwimming(false);
    setIsTennis(true);
  }
  const uniqueParticipant = participant.filter((game, index, self) =>
  index === self.findIndex((g) => g.Name === game.Name ));
  const uniquechessParticipant = chessparticipant.filter((game, index, self) =>
  index === self.findIndex((g) => g.Name === game.Name ));
  const uniquecarromParticipant = carromparticipant.filter((game, index, self) =>
  index === self.findIndex((g) => g.Name === game.Name ));
  const uniqueswimmingParticipant = swimmingparticipant.filter((game, index, self) =>
  index === self.findIndex((g) => g.Name === game.Name ));
  const uniquetennisParticipant = tennisparticipant.filter((game, index, self) =>
  index === self.findIndex((g) => g.Name === game.Name ));
  const getBadmintonCount=async()=>{
    console.log("hi in badmintoncount")
    let  result=await fetch(`http://localhost:8080/count/badminton/${year}`,{
      method:'post',
      body:JSON.stringify(),
      headers:{
          'Content-Type':'application/json'
      }

  });
  let data=await result.json();

  //  if(result.status===422)
  //  {
  //    message.error(data.message);
  //  }

  
  console.log(data);
   setBadmintonMaleCount(data.maleCount);
   setBadmintonFemaleCount(data.femaleCount)
  
  }
  const getChessCount=async()=>{
    console.log("hi in badmintoncount")
    let  result=await fetch("http://localhost:8080/count/chess",{
      method:'post',
      body:JSON.stringify(),
      headers:{
          'Content-Type':'application/json'
      }

  });
  let data=await result.json();

  //  if(result.status===422)
  //  {
  //    message.error(data.message);
  //  }

  
  console.log(data);
   setChessMaleCount(data.maleCount);
   setChessFemaleCount(data.femaleCount)
  
  }
  const getCarromCount=async()=>{
    console.log("hi in badmintoncount")
    let  result=await fetch("http://localhost:8080/count/carrom",{
      method:'post',
      body:JSON.stringify(),
      headers:{
          'Content-Type':'application/json'
      }

  });
  let data=await result.json();

  

  //  if(result.status===422)
  //  {
  //    message.error(data.message);
  //  }

  
  console.log(data);
   setCarromMaleCount(data.maleCount);
   setCarromFemaleCount(data.femaleCount)
  
  }
  const getSwimmingCount=async()=>{
    console.log("hi in badmintoncount")
    let  result=await fetch("http://localhost:8080/count/carrom",{
      method:'post',
      body:JSON.stringify(),
      headers:{
          'Content-Type':'application/json'
      }

  });
  let data=await result.json();

  

  //  if(result.status===422)
  //  {
  //    message.error(data.message);
  //  }

  
  console.log(data);
   setSwimmingMaleCount(data.maleCount);
   setSwimmingFemaleCount(data.femaleCount)
  
  }
  const getTennisCount=async()=>{
    console.log("hi in badmintoncount")
    let  result=await fetch("http://localhost:8080/count/tennis",{
      method:'post',
      body:JSON.stringify(),
      headers:{
          'Content-Type':'application/json'
      }

  });
  let data=await result.json();

  

  //  if(result.status===422)
  //  {
  //    message.error(data.message);
  //  }

  
  console.log(data);
   setTennisMaleCount(data.maleCount);
   setTennisFemaleCount(data.femaleCount)
  
  }

 

  const getBadmintonParticipant=async()=>{
    let  result=await fetch("http://localhost:8080/postparticipant/badminton",{
      method:'post',
      body:JSON.stringify(),
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
  setParticipant(data);
  console.log(data);
  }
  }
  const getChessParticipant=async()=>{
    let  result=await fetch("http://localhost:8080/postparticipant/chess",{
      method:'post',
      body:JSON.stringify(),
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
  setchessParticipant(data);
  console.log(data);
  }
  }
  const getCarromParticipant=async()=>{
    let  result=await fetch("http://localhost:8080/postparticipant/carrom",{
      method:'post',
      body:JSON.stringify(),
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
  setcarromParticipant(data);
  console.log(data);
  }
  }
  const getSwimmingParticipant=async()=>{
    let  result=await fetch("http://localhost:8080/postparticipant/swimming",{
      method:'post',
      body:JSON.stringify(),
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
  setswimmingParticipant(data);
  console.log(data);
  }
  }
  const getTennisParticipant=async()=>{
    let  result=await fetch("http://localhost:8080/postparticipant/tennis",{
      method:'post',
      body:JSON.stringify(),
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
  settennisParticipant(data);
  console.log(data);
  }
  }
  
   
  
  
  return (
    <>
    <Select placeholder="Year" style={{ width: 150,marginLeft:'40%',paddingTop:'1%' }} onChange={handleYearChange} >
       
         
           
       <Option value="2022">2022</Option>
       <Option value="2023">2023</Option>
       <Option value="2024">2024</Option>
       <Option value="2025">2025</Option>
       <Option value="2026">2026</Option>
   
     
   
 

   
 </Select>
 {/* <button onClick={onButtonClick}>
                    Download PDF
                </button> */}
                

  {isDetails&&( <h1  style={{marginLeft:'38%',color:'white',paddingTop:'1%'}}>SportWise Details</h1>)} 
       <Table striped bordered hover variant='dark'  borderColor="success">
      
     {isDetails&&( <tr>
        <th>Sr No.</th>
        <th>Sport</th>
        <th>Male Participants</th>

        <th>Female Particicpants</th>
        
        
        

      </tr>
     )}
        
            
             {isDetails&&( 
             <tr >
                <td >1</td>
                <td className='badmintontrue' onClick={handleBadminton}>Badminton</td>
                <td>{badmintonmalecount}</td>
                <td>{badmintonfemalecount}</td>
                
                
                

              </tr>
             )}
             {isDetails&&(
              <tr >
                <td >2</td>
                <td className='badmintontrue' onClick={handleChess}>Chess</td>
                <td>{chessmalecount}</td>
                <td>{chessfemalecount}</td>
                
                
                

              </tr>)}
            {isDetails&&(  <tr >
                <td >3</td>
                <td className='badmintontrue' onClick={handleCarrom}>Carrom</td>
                <td>{carrommalecount}</td>
                <td>{carromfemalecount}</td>
                
                
                

              </tr>
            )}
              
            {isDetails&&(  <tr >
                <td >4</td>
                <td className='badmintontrue' onClick={handleSwimming}>Swimming</td>
                <td>{swimmingmalecount}</td>
                <td>{swimmingfemalecount}</td>
                
                
                

              </tr>
            )}
             {isDetails&&( <tr >
                <td >5</td>
                <td className='badmintontrue' onClick={handleTennis}>Tennis</td>
                <td>{tennismalecount}</td>
                <td>{tennisfemalecount}</td>
                
                
                

              </tr>)}
     
      
      
    </Table> 
    {isDetails1&&( <h1  style={{marginLeft:'38%',color:'white',paddingTop:'1%'}}>SportWise Details</h1>)} 
       <Table striped bordered hover variant='dark'  borderColor="success">
      
     {isDetails1&&( <tr>
        <th>Sr No.</th>
        <th>Sport</th>
        <th>Male Participants</th>

        <th>Female Particicpants</th>
        
        
        

      </tr>
     )}
        
            
             {isDetails1&&( 
             <tr >
                <td >1</td>
                <td className='badmintontrue' onClick={handleBadminton}>Badminton</td>
                <td>2</td>
                <td>1</td>
                
                
                

              </tr>
             )}
             {isDetails1&&(
              <tr >
                <td >2</td>
                <td className='badmintontrue' onClick={handleChess}>Chess</td>
                <td>4</td>
                <td>3</td>
                
                
                

              </tr>)}
            {isDetails1&&(  <tr >
                <td >3</td>
                <td className='badmintontrue' onClick={handleCarrom}>Carrom</td>
                <td>1</td>
                <td>1</td>
                
                
                

              </tr>
            )}
              
            {isDetails1&&(  <tr >
                <td >4</td>
                <td className='badmintontrue' onClick={handleSwimming}>Swimming</td>
                <td>1</td>
                <td>2</td>
                
                
                

              </tr>
            )}
             {isDetails1&&( <tr >
                <td >5</td>
                <td className='badmintontrue' onClick={handleTennis}>Tennis</td>
                <td>1</td>
                <td>1</td>
                
                
                

              </tr>)}
     
      
      
    </Table> 
    {isDetails2&&( <h1  style={{marginLeft:'38%',color:'white',paddingTop:'1%'}}>SportWise Details</h1>)} 
       <Table striped bordered hover variant='dark'  borderColor="success">
      
     {isDetails2&&( <tr>
        <th>Sr No.</th>
        <th>Sport</th>
        <th>Male Participants</th>

        <th>Female Particicpants</th>
        
        
        

      </tr>
     )}
        
            
             {isDetails2&&( 
             <tr >
                <td >1</td>
                <td className='badmintontrue' onClick={handleBadminton}>Badminton</td>
                <td>1</td>
                <td>2</td>
                
                
                

              </tr>
             )}
             {isDetails2&&(
              <tr >
                <td >2</td>
                <td className='badmintontrue' onClick={handleChess}>Chess</td>
                <td>2</td>
                <td>0</td>
                
                
                

              </tr>)}
            {isDetails2&&(  <tr >
                <td >3</td>
                <td className='badmintontrue' onClick={handleCarrom}>Carrom</td>
                <td>3</td>
                <td>2</td>
                
                
                

              </tr>
            )}
              
            {isDetails2&&(  <tr >
                <td >4</td>
                <td className='badmintontrue' onClick={handleSwimming}>Swimming</td>
                <td>3</td>
                <td>3</td>
                
                
                

              </tr>
            )}
             {isDetails2&&( <tr >
                <td >5</td>
                <td className='badmintontrue' onClick={handleTennis}>Tennis</td>
                <td>2</td>
                <td>1</td>
                
                
                

              </tr>)}
     
      
      
    </Table> 
    {isDetails3&&( <h1  style={{marginLeft:'38%',color:'white',paddingTop:'1%'}}>SportWise Details</h1>)} 
       <Table striped bordered hover variant='dark'  borderColor="success">
      
     {isDetails3&&( <tr>
        <th>Sr No.</th>
        <th>Sport</th>
        <th>Male Participants</th>

        <th>Female Particicpants</th>
        
        
        

      </tr>
     )}
        
            
             {isDetails3&&( 
             <tr >
                <td >1</td>
                <td className='badmintontrue' onClick={handleBadminton}>Badminton</td>
                <td>1</td>
                <td>1</td>
                
                
                

              </tr>
             )}
             {isDetails3&&(
              <tr >
                <td >2</td>
                <td className='badmintontrue' onClick={handleChess}>Chess</td>
                <td>2</td>
                <td>2</td>
                
                
                

              </tr>)}
            {isDetails3&&(  <tr >
                <td >3</td>
                <td className='badmintontrue' onClick={handleCarrom}>Carrom</td>
                <td>4</td>
                <td>1</td>
                
                
                

              </tr>
            )}
              
            {isDetails3&&(  <tr >
                <td >4</td>
                <td className='badmintontrue' onClick={handleSwimming}>Swimming</td>
                <td>0</td>
                <td>2</td>
                
                
                

              </tr>
            )}
             {isDetails3&&( <tr >
                <td >5</td>
                <td className='badmintontrue' onClick={handleTennis}>Tennis</td>
                <td>1</td>
                <td>2</td>
                
                
                

              </tr>)}
     
      
      
    </Table> 
    {isDetails4&&( <h1  style={{marginLeft:'38%',color:'white',paddingTop:'1%'}}>SportWise Details</h1>)} 
       <Table striped bordered hover variant='dark'  borderColor="success">
      
     {isDetails4&&( <tr>
        <th>Sr No.</th>
        <th>Sport</th>
        <th>Male Participants</th>

        <th>Female Particicpants</th>
        
        
        

      </tr>
     )}
        
            
             {isDetails4&&( 
             <tr >
                <td >1</td>
                <td className='badmintontrue' onClick={handleBadminton}>Badminton</td>
                <td>2</td>
                <td>1</td>
                
                
                

              </tr>
             )}
             {isDetails4&&(
              <tr >
                <td >2</td>
                <td className='badmintontrue' onClick={handleChess}>Chess</td>
                <td>4</td>
                <td>3</td>
                
                
                

              </tr>)}
            {isDetails4&&(  <tr >
                <td >3</td>
                <td className='badmintontrue' onClick={handleCarrom}>Carrom</td>
                <td>1</td>
                <td>1</td>
                
                
                

              </tr>
            )}
              
            {isDetails4&&(  <tr >
                <td >4</td>
                <td className='badmintontrue' onClick={handleSwimming}>Swimming</td>
                <td>1</td>
                <td>2</td>
                
                
                

              </tr>
            )}
             {isDetails4&&( <tr >
                <td >5</td>
                <td className='badmintontrue' onClick={handleTennis}>Tennis</td>
                <td>1</td>
                <td>1</td>
                
                
                

              </tr>)}
     
      
      
    </Table> 
  
    {isBadminton&&(
    <h1 style={{marginLeft:'35%',color:'white'}}>Badminton Participants</h1>
    )
}

      <Table striped bordered hover variant='dark'  borderColor="success">
      {
        isBadminton&&(
      <tr>
        <th>Sr No.</th>
        <th>ID</th>
        <th>Name</th>

        <th>Gender</th>
        
        <th> Department</th>
        

      </tr>
        )
     }
      {
        isBadminton&&(
        
        uniqueParticipant.map((val,idx) => {
          return(
            <>
              <tr >
                <td >{idx+1}</td>
                <td>{val.ID}</td>
                <td>{val.Name}</td>
                <td>{val.Gender}</td>
                <td>{val.department}</td>
                
                

              </tr>
            </>
          )
        })
        ) 
      }
    
    </Table>
    {isChess&&( 
    <h1 style={{marginLeft:'35%',color:'white'}}>Chess Participants</h1>)}
    <Table striped bordered hover variant='dark'  borderColor="success">
      {isChess&&(
      <tr>
        <th>Sr No.</th>
        <th>ID</th>
        <th>Name</th>

        <th>Gender</th>
        
        <th> Department</th>
        

      </tr>
      )
}
      {
        isChess&&(
        uniquechessParticipant.map((val,idx) => {
          return(
            <>
              <tr >
                <td >{idx+1}</td>
                <td>{val.ID}</td>
                <td>{val.Name}</td>
                <td>{val.Gender}</td>
                <td>{val.department}</td>
                
                

              </tr>
            </>
          )
        })
        )
      }
    </Table> 
    {isCarrom&&(
    <h1 style={{marginLeft:'35%',color:'white'}}>Carrom Participants</h1>
    )
}
    <Table striped bordered hover variant='dark'  borderColor="success">
      {isCarrom&&(
      <tr>
        <th>Sr No.</th>
        <th>ID</th>
        <th>Name</th>

        <th>Gender</th>
        
        <th> Department</th>
        

      </tr>)
}
      {isCarrom&&(
        uniquecarromParticipant.map((val,idx) => {
          return(
            <>
              <tr >
                <td >{idx+1}</td>
                <td>{val.ID}</td>
                <td>{val.Name}</td>
                <td>{val.Gender}</td>
                <td>{val.department}</td>
                
                

              </tr>
            </>
          )
        })
      )
      }
    </Table> 

   {isSwimming&&(
    <h1 style={{marginLeft:'35%',color:'white'}}>Swimming Participants</h1>)}
    <Table striped bordered hover variant='dark'  borderColor="success">
      {isSwimming&&(
      <tr>
        <th>Sr No.</th>
        <th>ID</th>
        <th>Name</th>

        <th>Gender</th>
        
        <th> Department</th>
        

      </tr>)}
      {isSwimming&&(
        uniqueswimmingParticipant.map((val,idx) => {
          return(
            <>
              <tr >
                <td >{idx+1}</td>
                <td>{val.ID}</td>
                <td>{val.Name}</td>
                <td>{val.Gender}</td>
                <td>{val.department}</td>
                
                

              </tr>
            </>
          )
        })
      )
      }
    </Table>
    {isTennis&&(
      <h1 style={{marginLeft:'35%',color:'white'}}>Tennis Participants</h1>)} 
    <Table striped bordered hover variant='dark'  borderColor="success">
      {isTennis&&(
      <tr>
        <th>Sr No.</th>
        <th>ID</th>
        <th>Name</th>

        <th>Gender</th>
        
        <th> Department</th>
        

      </tr>)}
      {isTennis&&(
        uniquetennisParticipant.map((val,idx) => {
          return(
            <>
              <tr >
                <td >{idx+1}</td>
                <td>{val.ID}</td>
                <td>{val.Name}</td>
                <td>{val.Gender}</td>
                <td>{val.department}</td>
                
                

              </tr>
            </>
          )
        })
      )
      }
    </Table> 
    </>
  )
}

export default Report;
