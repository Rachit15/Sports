import React,{useState} from 'react';
import './ForgetPassword.css';
import { Form, Input, message } from 'antd';
import{Link} from 'react-router-dom';
const OTP = () => {
  const [otp, setOtp] = useState("");
  
  const collectData = async () => {
     console.log("hello ");
     console.log(otp)
     let  result=await fetch("http://localhost:8080/otp",{
            method:'post',
            body:JSON.stringify({otp}),
            headers:{
                'Content-Type':'application/json'
            }

        });
        console.log("hi");
       let data=await result.json();
        console.log(result.status);
        
      console.log(data.status);
        if(result.status===400)
        {
          console.log("error");
          message.error(data.message);
      //window.location='/otp';
        }
        else
        {
          console.log("success");
          window.location='/resetpassword';
        }
         // localStorage.setItem("creator",JSON.stringify(result));
         // window.location='/otp';
        

  }
  return (
    <>
     <div className="form-container">
                <Form layout="vertical"  className="register-form">
                    <h3 className="text-center">Enter OTP</h3>
                    <Form.Item label="OTP" name="otp">
                        <Input type="text" required value={otp} onChange={(e) => setOtp(e.target.value)}></Input>
                    </Form.Item>
                   
                   {/* <Link to="/resetpassword"> */}
                    <button className="btn btn-warning" style={{background:"black",color:"pink",marginLeft:"60px" }}type="submit" onClick={collectData}>Submit</button>
                    {/* </Link> */}
                </Form>
            </div>  
    </>
  )
}

export default OTP;
