
import React, { useState } from 'react';
import './Arrange.css';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}from  'mdb-react-ui-kit';
const Arrange = () => {
  
    
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const collectData = async () => {
     console.log("hello hy");
     console.log(email, password);
     let  result=await fetch("http://localhost:8080/arrange",{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }

        });
        result=await result.json();
        localStorage.setItem("creator",JSON.stringify(result));

  }
  return (
    <>

    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" value={email} onChange={(e) => setEmail(e.target.value)} />
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" value={password} onChange={(e) => setPassword(e.target.value)} />

              <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
              <button type="button" className="btn btn-primary text-uppercase btn-md shadow  rounded"
                style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem", fontWeight: "bold", height: "40px", marginBottom: "20px" }} onClick={collectData} >Login</button>

              <div className='d-flex flex-row mt-3 mb-5'>
                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='facebook-f' size="lg" />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='twitter' size="lg" />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='google' size="lg" />
                </MDBBtn>
              </div>

              <div>
                {/* <p className="mb-0">Don't have an account? <class="text-white-50 fw-bold" as={Link} to='/signup'>Sign Up</a></p> */}
                <Button class="Sign" as={Link} to='signup'> SignUp</Button>
              </div>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
    </>
  );
}

export default Arrange;
      
    
  



