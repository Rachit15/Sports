import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const[username,setUserName]=useState("");
    const[name,setName]=useState("");
    const[contact,setContact]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    console.log(username,name,contact,email,password);
    const collectData=async()=>{
        let  result=await fetch("http://localhost:8080/register",{
            method:'post',
            body:JSON.stringify({name,username,email,contact,password}),
            headers:{
                'Content-Type':'application/json'
            }

        });
        result=await result.json();
        localStorage.setItem("creator",JSON.stringify(result));

        
        
    }
  return (
    <>
       <div className="box-1">
                    <div className="title_box">
                        <h2>Form</h2>
                       
                    </div>
                    <div className="content_box">
                      
                        <form >
                        <p>
                            Username: <br />
                            <input type="text" name="text" id="Address" placeholder="Type your ID here" 
                            value={username} onChange={(e)=>setUserName(e.target.value)}
                            />
                        </p>
                        
                        <p>
                            Name: <br />
                            <input type="text" name="Name" id="Name" placeholder="Type your full name here"
                             value={name} onChange={(e)=>setName(e.target.value)} 
                            />
                        </p>
                        <p>
                            Contact No.: <br />
                            <input type="tel" name="mobile" id="mobile" placeholder="Contact No." 
                             value={contact} onChange={(e)=>setContact(e.target.value)}
                            />
                        </p>
                        
                        
                        
                        <p>
                            Email: <br />
                            <input type="email" placeholder="Type your email here" 
                             value={email} onChange={(e)=>setEmail(e.target.value)}
                            />
                        </p>
                        <p>
                            Password: <br />
                            <input type="password" placeholder="Type your password here" 
                             value={password} onChange={(e)=>setPassword(e.target.value)}
                            />
                        </p>
                        <button class="SignUp_Button"as={Link} to='tournamentform' onClick={collectData} type="button">SignUp</button>
                            {/* <input type="submit"onClick={collectData} value="Submit" /> */}
                        </form>
                        
                    </div>
                </div>
    </>
  )
}

export default SignUp
