
import { Form, Input, message } from 'antd';
import{Link} from 'react-router-dom';
import './ForgetPassword.css';
import React, { useState } from 'react';

import Button from 'react-bootstrap/esm/Button';
const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const collectData = async () => {
     console.log("hello ");
     console.log(password, confirmpassword);
     let  result=await fetch("http://localhost:8080/resetpassword",{
            method:'post',
            body:JSON.stringify({password,confirmpassword}),
            headers:{
                'Content-Type':'application/json'
            }

        });
       let data=await result.json();
         if(result.status===400)
       message.error(data.message);
        else
        {
          localStorage.setItem("creator",JSON.stringify(result));
          window.location='/arrange';
        }

  }
  return (
    <>
    <div className="form-container">
                <Form layout="vertical"  className="register-form">
                    <h3 className="text-center"> Reset Password</h3>
                    <Form.Item label="New Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}
>
                        <Input type="password" required></Input>
                    </Form.Item>
                    <Form.Item label="Confirm Password" name="confirmpassword"  value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)}>
                        <Input type="password" required></Input>
                    </Form.Item>
                   
                   {/* <Link to="/arrange"> */}
                    <button className="btn btn-warning" style={{background:"black",color:"pink",marginLeft:"60px" }}type="submit" onClick={collectData}>Reset</button>
                    {/* </Link> */}
                </Form>
            </div>    
    </>
  )
}

export default ResetPassword;
