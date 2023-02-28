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
    <MDBContainer fluid className='p-6 background-radial-gradient overflow-hidden' >

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          { <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
            <br />
            <span style={{color: 'hsl(218, 81%, 75%)'}}></span>
          </h1> }

          <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
            
          </p>

        </MDBCol>

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>

              <MDBRow>
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

              

              <MDBBtn className='w-30 ' size='lg' style={{ marginLeft:'50%'}} onClick={collectData}>sign up</MDBBtn>

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