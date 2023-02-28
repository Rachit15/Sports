import React,{ Component,useContext, useState } from 'react';



const Logout = async() => {
  
    console.log("In logoutfn");
    try{
      let res=await fetch("/logout",{
        method:"post",
        headers:{
          "Content-type":"Application/json"

        },
        credentials:"include"
      })
      console.log(res);
      let data=await res.json();
      if(res.status===200)
      {
        // dispatch({type:"User",payload:"false"})
        window.location="/arrange";
      }

    }
    catch(err)
    {
      console.log("error");
    }
  
  return (
    <>
      
    </>
  )
}

export default Logout;
