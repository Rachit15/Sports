import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css"
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBRadio,
  // MDBSelect
}
from 'mdb-react-ui-kit';

import DatePicker from 'react-datepicker';



const CreateTournament = () => {
    console.log("Hi");
    const [tournamentname,setTournamentname]=useState("");
  const [tournamentplace,setTournamentplace]=useState("");
    const [startDate, setStartDate] = React.useState(new Date());
    const [selectedOption, setSelectedOption] = useState("");
  
  const [tournamenthost,setTournamenthost]=useState("");
  const [winner,setWinner]=useState("");
  const [Runner1,setRunner1]=useState("");
  const [Runner2,setRunner2]=useState("");
  const handleOptionChange = (changeEvent) => {
    setSelectedOption(changeEvent.target.value);
}

  const collectData = async () => {
    console.log("hello hy");
    console.log(tournamentname, tournamentplace,tournamenthost,winner,Runner1,Runner2,startDate,selectedOption);
    const  result=await fetch("http://localhost:8080/createtournament",{
      method:'post',
      body:JSON.stringify({tournamentname, tournamentplace,tournamenthost,startDate,selectedOption,winner,Runner1,Runner2}),
      headers:{
          'Content-Type':'application/json'
      }

  });
  let data=await result.json();
  if(!data||result.status===422)
  console.log("error");
  else
  {
    
    window.location='/adminpanel';
  }
   console.log(result);
  }
  return (
    <>
      
    <MDBContainer fluid className='bg-dark'>

<MDBRow className='d-flex justify-content-center align-items-center h-100'>
  <MDBCol>

    <MDBCard className='my-4'>

      <MDBRow className='g-0'>

        <MDBCol md='6' className=".d-none d-md-block"
        style={{ height: '1500px' }}>
          <MDBCardImage src='https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt="Sample photo" className="rounded-start" fluid/>
        </MDBCol>

        <MDBCol md='6'>

          <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
            <h3 className="mb-5 text-uppercase fw-bold">Create Tournament form</h3>

            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Tournament Name' size='lg'  type='text' value={tournamentname} onChange={(e) => setTournamentname(e.target.value)}/>
              </MDBCol>

            <  MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Sport' size='lg'  type='text' value={tournamentplace} onChange={(e) => setTournamentplace(e.target.value)}/>
              </MDBCol>

            </MDBRow>
            
            
              
            
            
<div>
<MDBRow>
                      <MDBCol md='6'>
                        <DatePicker 
                            selected={startDate} 
                            onChange={date => setStartDate(date)} 
                            id="example-datepicker" 
                            wrapperClass='mb-4' 
                            size='lg' 
         
    customInput={
        <MDBInput 
            size='lg' 
            id='form3' 
            type='text' 
            wrapperClass='mb-4' 
        />
    }
                        />
                      </MDBCol>
                      </MDBRow>
                      </div>
            <div className='d-md-flex ustify-content-start align-items-center mb-4'>
              <h6 class="fw-bold mb-0 me-4">For: </h6>
              <MDBRadio name='inlineRadio' id='inlineRadio1' value='male' label='Male' inline  checked={selectedOption === 'male'} onChange={handleOptionChange}/>
              <MDBRadio name='inlineRadio' id='inlineRadio2' value='female' label='Female' inline  checked={selectedOption === 'female'} onChange={handleOptionChange}/>
              <MDBRadio name='inlineRadio' id='inlineRadio3' value='mix' label='Mix' inline  checked={selectedOption === 'mix'} onChange={handleOptionChange}/>
            </div>

           

            <MDBInput wrapperClass='mb-4' label='Host Department' size='lg' id='form4' type='text'value={tournamenthost} onChange={(e) => setTournamenthost(e.target.value)}/>
            <MDBInput wrapperClass='mb-4' label='Winning Price' size='lg' id='form5' type='text'value={winner} onChange={(e) => setWinner(e.target.value)}/>
            <MDBInput wrapperClass='mb-4' label='1Runner Up Price' size='lg' id='form6' type='text'value={Runner1} onChange={(e) => setRunner1(e.target.value)}/>
            <MDBInput wrapperClass='mb-4' label='2Runner Up Price' size='lg' id='form6' type='text'value={Runner2} onChange={(e) => setRunner2(e.target.value)}/>
           
            <div>
            <button type="button" className="btn btn-primary text-uppercase btn-md shadow  rounded"
                style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem", fontWeight: "bold", height: "40px", marginBottom: "20px" }} onClick={collectData}  >Submit</button>
            </div>

          </MDBCardBody>

        </MDBCol>
      </MDBRow>

    </MDBCard>

  </MDBCol>
</MDBRow>

</MDBContainer>

    </>
      
    
  )
}

export default CreateTournament;
