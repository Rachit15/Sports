import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
const Arrange = () => {
  return (
    <>
   <div class="box-1">
                    <div class="title_box">
                        <h2>Login</h2>
                        <p>If Not Registered Sign up
                         
                        </p>
                    </div>
                    <div class="content_box">
                        
                        <form class="Log">
                        <p>
                            Username: <br />
                            <input type="text" name="text" id="Address" placeholder="Type your ID here" 
                            />
                        </p>
                        
                        
                        
                        
                        <p>
                            Password: <br />
                            <input type="password" placeholder="Type your email here" 
                              
                            />
                        </p>
                           <Button class="Login"> Login</Button>
                            <Button class="Sign" as={Link} to='signup'> SignUp</Button>
                        </form>
                        
                    </div>
                </div>
    </>
  )
}

export default Arrange
