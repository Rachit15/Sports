import React, { useState,useEffect } from 'react';
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

const ChessParticipant = () => {
    const [Name,setName]=useState("");
   const [ID,setID]=useState("");
    const [age, setAge] = useState();
     const [Gender, setGender] = useState("");
  const [department,setDepartment]=useState("");
  const [TournamentID,setTournamentID]=useState("");
   const [email,setEmail]=useState("");
  const [Contactno,setContactno]=useState("");
  const[games,setGames]=useState([]);
  useEffect(()=>{
 getGames()
  },[]);
  const getGames=async()=>{
    let  result=await fetch("http://localhost:8080/individualevents/event2",{
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
  

  const handleOptionChange = (changeEvent) => {
    setGender(changeEvent.target.value);
}

  const collectData = async () => {
    console.log("In collect Data");
    console.log(Name, ID,age,Gender,TournamentID,email,Contactno,department);
   const  result=await fetch("http://localhost:8080/chessparticipant",{
      method:'post',
      body:JSON.stringify({Name, ID,age,Gender,TournamentID,email,Contactno,department}),
      headers:{
          'Content-Type':'application/json'
       }

   });
  let data=await result.json();
  if(!data||result.status===422)
  message.error(data.message);
  else if(result.status===423)
  {
    message.error(data.message);
  }
  else
   {
    
      window.location='/chessparticipant';
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
                <MDBInput wrapperClass='mb-4' label='ID' size='lg'  type='text' 
                 value={ID} onChange={(e) => setID(e.target.value)}
                />
              </MDBCol>

            </MDBRow>
            
            
              
            
            
<div>
<MDBRow>
<MDBInput wrapperClass='mb-4' label='Age' size='lg' id='form5' type='text'
style={{width:'10%'}}
             value={age} onChange={(e) => setAge(e.target.value)}
            />
            <MDBInput wrapperClass='mb-4' label='Department' size='lg' id='form5' type='text' style={{width:'10%'}}

             value={department} onChange={(e) => setDepartment(e.target.value)}
            />
            
                     
                      </MDBRow>
                      </div>
            <div className='d-md-flex ustify-content-start align-items-center mb-4'>
              <h6 class="fw-bold mb-0 me-4">Gender: </h6>
              <MDBRadio name='inlineRadio' id='inlineRadio1' value='male' label='Male' 
               inline  checked={Gender === 'male'} onChange={handleOptionChange}
              />
              <MDBRadio name='inlineRadio' id='inlineRadio2' value='female' label='Female' 
              inline  checked={Gender === 'female'} onChange={handleOptionChange}
              />
              
            </div>
            <Form.Item style={{paddingTop:"50px"}}
     
     name="Tournament Name"
     label={<span style={{ color: 'black',fontSize:'26px' }}>Tournament Name
     </span>}
     
     
   >
        <Select placeholder="Please select a winner" style={{ width: 150 }} onChange={(value) => setTournamentID(value)}>
        {
       games.map((val,idx) => {
         return(
           <>
             <Option value={val.tournamentname}>{val.tournamentname}</Option>
         
           </>
         )
       })
     }
         
       </Select>
     
   </Form.Item> 
   
           
{/* 
            <MDBInput wrapperClass='mb-4' label='Tournament Name' size='lg' id='form4' type='text'
            value={TournamentID} onChange={(e) => setTournamentID(e.target.value)}
            /> */}
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

export default ChessParticipant;

