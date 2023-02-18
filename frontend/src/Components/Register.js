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


const Register = () => {
  console.log("Hi");
     const [Name,setName]=useState("");
   const [ID,setID]=useState("");
    const [BirthDate, setBirthDate] = React.useState(new Date());
     const [Gender, setGender] = useState("");
  
  const [TournamentID,setTournamentID]=useState("");
   const [email,setEmail]=useState("");
  const [Contactno,setContactno]=useState("");

  const handleOptionChange = (changeEvent) => {
    setGender(changeEvent.target.value);
}

  const collectData = async () => {
    console.log("hello bye");
    console.log(Name, ID,BirthDate,Gender,TournamentID,email,Contactno);
   const  result=await fetch("http://localhost:8080/participant",{
      method:'post',
      body:JSON.stringify({Name, ID,BirthDate,Gender,TournamentID,email,Contactno}),
      headers:{
          'Content-Type':'application/json'
       }

   });
  let data=await result.json();
  if(!data||result.status===422)
  console.log("error");
  else
   {
    
     window.location='/';
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
            <h3 className="mb-5 text-uppercase fw-bold">Participation Form</h3>

            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label=' Name' size='lg'  type='text' 
                 value={Name} onChange={(e) => setName(e.target.value)}
                />
              </MDBCol>

            <  MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='CollegeID' size='lg'  type='text' 
                 value={ID} onChange={(e) => setID(e.target.value)}
                />
              </MDBCol>

            </MDBRow>
            
            
              
            
            
<div>
<MDBRow>
                      <MDBCol md='6'>
                        <DatePicker 
                             selected={BirthDate} 
                             onChange={date => setBirthDate(date)} 
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
              <MDBRadio name='inlineRadio' id='inlineRadio1' value='male' label='Male' 
               inline  checked={Gender === 'male'} onChange={handleOptionChange}
              />
              <MDBRadio name='inlineRadio' id='inlineRadio2' value='female' label='Female' 
              inline  checked={Gender === 'female'} onChange={handleOptionChange}
              />
              
            </div>

           

            <MDBInput wrapperClass='mb-4' label='Tournament Name' size='lg' id='form4' type='text'
            value={TournamentID} onChange={(e) => setTournamentID(e.target.value)}
            />
            <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form5' type='text'
             value={email} onChange={(e) => setEmail(e.target.value)}
            />
            <MDBInput wrapperClass='mb-4' label='Contact No' size='lg' id='form6' type='text'
            value={Contactno} onChange={(e) => setContactno(e.target.value)}
            />
            
           
            <div>
            <button type="button" className="btn btn-primary text-uppercase btn-md shadow  rounded"
                style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem", fontWeight: "bold", height: "40px", marginBottom: "20px" }}
                 onClick={collectData}
                   >Submit</button>
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

export default Register;
