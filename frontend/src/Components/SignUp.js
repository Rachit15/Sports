import React,{useState} from 'react';
import './SignUp.CSS';
import { Form, Input, message } from 'antd';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
const SignUp = () => {
    console.log("Hi");
    const[username,setUserName]=useState("");
    const[name,setName]=useState("");
    const[contact,setContact]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    console.log(username,name,contact,email,password);
    const collectData=async()=>{
        console.log("Hi");
            const  result=await fetch("http://localhost:8080/register",{
                method:'post',
                body:JSON.stringify({name,username,email,contact,password}),
                headers:{
                    'Content-Type':'application/json'
                }
    
            });
            let data=await result.json();
        if(result.status===422)
        message.error(data.message);
        else if(result.status===400)
        message.error(data.message);
        else
        {
          window.location='/arrange';
        }
             
    console.log("In collectData")
        console.log(username,name,contact,email,password);
         

        }

  return (
    <>
    <MDBContainer fluid className='p-6 background-radial-gradient overflow-hidden'>
      
      <MDBRow>
      
        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

         
            <span style={{color: 'hsl(218, 81%, 75%)'}}>
              <img src="https://img.freepik.com/free-vector/summer-sports-concept_1284-9394.jpg?w=740&t=st=1678815477~exp=1678816077~hmac=a23fc4333a121a4dca700647625d15f8da1ecbf769ee7fe25c235c02cae68d3e" style={{height:'81.5%',width:'750px',paddingTop:'7%',paddingLeft:'0'}}></img>
            </span>
          

        

        </MDBCol>

        <MDBCol md='6' className='position-relative' >

         

          <MDBCard className='my-5 bg-glass ' style={{paddingLeft:'0px'}}>
            <MDBCardBody className='p-5'>

              <MDBRow>
              <h1 style={{textAlign:'center'}}>Welcome!!! Sign Up here</h1>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='ID number' id='form1' type='text'  value={username} onChange={(e)=>setUserName(e.target.value)}/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label=' Name' id='form2' type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
                </MDBCol>
              </MDBRow>
              <MDBInput wrapperClass='w-5 mb-4' label='Contact' id='form3' type='text'  value={contact} onChange={(e)=>setContact(e.target.value)}/>
              <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>

              

              <MDBBtn className='w-30 ' size='lg' style={{ marginLeft:'50%',width:'20%'}} onClick={collectData} >sign up</MDBBtn>

              <div className="text-center">

               

                

              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </>
  );
  }

export default SignUp;