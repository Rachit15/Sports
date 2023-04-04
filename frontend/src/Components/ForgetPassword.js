import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';

import { Form, Input, message } from 'antd';
import{Link} from 'react-router-dom';
import './ForgetPassword.css';
const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  
  const collectData = async () => {
     console.log("hello ");
     
     let  result=await fetch("http://localhost:8080/forget",{
            method:'post',
            body:JSON.stringify({email}),
            headers:{
                'Content-Type':'application/json'
            }

        });
       let data=await result.json();
       console.log(result.status)
        if(result.status===400)
     {
      console.log("error")
       message.error(data.message);
      
     }
        else
        
        {
          console.log("success");
         // localStorage.setItem("creator",JSON.stringify(result));
          window.location='/otp';
        }

  }
  return (
    <>
     <div className="form-container">
                <Form layout="vertical"  className="register-form">
                    <h3 className="text-center">Login Form</h3>
                    <Form.Item label="Email" name="email">
                        <Input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}></Input>
                    </Form.Item>
                   
                   
                    <button className="btn btn-warning" style={{background:"black",color:"pink",marginLeft:"60px" }}type="submit" onClick={collectData}>Submit</button>
                    
                </Form>
            </div>  
    </>
  )
}

export default ForgetPassword;
