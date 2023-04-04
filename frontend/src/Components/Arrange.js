
import React, {  useState } from 'react';
import './Arrange.css';
import Button from 'react-bootstrap/esm/Button';
import { Link,useNavigate } from 'react-router-dom';
import {message} from "antd";
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
const Arrange = ({setisLoggedin}) => {
  
    // const {state,dispatch}=useContext(UserContext);
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const collectData = async () => {
     console.log("hello ");
     console.log(email, password);
     let  result=await fetch("/arrange",{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }

        });
       let data=await result.json();
        if(!data||result.status===400)
      message.error(data.message);
        else
        {
          console.log("In login");
           setisLoggedin(true);
          
          localStorage.setItem("creator",JSON.stringify(result));
          window.location='/adminpanel';
        }

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

              

              <button type="button" className="btn btn-primary text-uppercase btn-md shadow  rounded"
                style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem", fontWeight: "bold", height: "40px", marginBottom: "20px" }} onClick={collectData} as={Link} to='/createtournament' >Login</button>
                <Link to='/forgetpassword'>
<input type="submit" className="btn btn-success text-uppercase btn-md shadow  rounded"
                style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem", fontWeight: "bold", height: "40px", marginBottom: "20px" }}  value="Forgot Password" />
                </Link>
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
                {/* <Button class="Sign" as={Link} to='signup'> SignUp</Button> */}
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
      
    
  



