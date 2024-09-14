

// import { Button } from 'react-bootstrap';

import React, { useState, useEffect } from "react";


const Signup = ({}) => {
  // states
  const[show,setShow]=useState(true)
  const server = import.meta.env.VITE_URL;
  const [formData,setFormData] = useState({
    name:"",
    username:"",
    password:"",
    
  });
  
  // post request to post new user and form funtions
  function handleChange(e) {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newUser = {
      name:formData.name,
      username: formData.username,
      password:formData.password, 
      
    }
    try {
      const response = await fetch(`${server}/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
  
      if (!response.ok) {
        // Handle the case where the server returns an error status
        console.log(formData)
        console.error(`Failed to add product. Status: ${response.status}`);
        alert("fill all text feilds before submitting")
        return;
      }
  
      // If the request is successful, you can handle the response if needed
      const addedUser = await response.json();
      console.log("show added:", addedUser);
      alert("your show has been added")
      // show form again on page
      // setShow(false)
  
      // Clear the form after successful submission
      setFormData({
        username:"",
        password:"",
        name:"",

      });
  
      // You may want to update your user list or perform other actions here
    } catch (error) {
      
      console.error("Error adding user:", error);
      alert("fill all text feilds before submitting")
    }
    

  }
  function handleClick(){
    setShow(!show)
  }
  const inline = {
    backgroundColor:"#fce4ec",
    border:"solid,#f48fb1,",
    borderRadius:"10px",
    padding:"10px",
    
  }
  
  
  return (
    <>
    {/* <div onClick={handleClick} className="closeButton" style={{left:"317px",top:"16px"}}>X</div> */}
    <div>
        
    <button style={show?{backgroundColor:"#f48fb1",width:"100%"}:inline} onClick={handleClick} className="navTitle" >Signup</button>
    
    
    <form style={show == true?{transition:"300ms",opacity:"100%"}:{transition:"300ms",opacity:"0%"}} className="addUserForm" onSubmit={handleSubmit}>
      <div className="formItem">
        <label>name:</label>
        {/* <br></br> */}
        <input
        className="userInput"
        placeholder="Account Name"
        type='text'
        id='name'
        value={formData.name}
        onChange={handleChange}/>
      </div>
      <div style={{position:"relative"}} className="formItem">
        <label>username:</label>
        <input
        className="userInput"
        placeholder="User Name"
        type='text'
        id='username'
        value={formData.username}
        onChange={handleChange}/>
      </div>
      <div style={{position:"relative"}} className="formItem">
        <label>password:</label>
        <input
        className="userInput"
        placeholder="Password"
        type='password'
        id='password'
        value={formData.password}
        onChange={handleChange}/>
      </div>
      
      <button style={{marginBottom:"20px"}} className="loginButton" type="submit">Signup</button>
        
    </form>
    
        </div>
    </>
  )
}

export default Signup