

// import { Button } from 'react-bootstrap';

import React, { useState, useEffect } from "react";


const AddProduct = ({}) => {
  // states
  const server = import.meta.env.VITE_URL;
  const [formData,setFormData] = useState({
    name:"",
    price:"",
    img:"",
    info:"",
    type:"",
    amount:"",

    // img=img,
    //             name=name,
    //             price=price,
    //             info=info,
    //             type=type,
    //             amount=amount,
    
  });
  
  // post request to post new user and form funtions
  function handleChange(e) {
    if(e.target.id ==="price"||e.target.id === "amount"){
      const newValue = (e.target.id === "price" || e.target.id === "amount") ? parseInt(e.target.value) || 0 : e.target.value;
      
      setFormData({
        ...formData,
        [e.target.id]: newValue
      })

    }else{
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: formData.name,
      price:formData.price,
      img:formData.img,
      info: formData.info,
      type: formData.type,
      amount: formData.amount,
      
    }
    try {
      const response = await fetch(`${server}/api/products`, {
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
        name:"",
        price:"",
        img:"",
        info:"",
        type:"",
        amount:"",
      });
  
      // You may want to update your user list or perform other actions here
    } catch (error) {
      
      console.error("Error adding user:", error);
      alert("fill all text feilds before submitting")
    }
    

  }
  function handleClick(){
    // setShow(false)
  }
  
  
  return (
    <>
    {/* <div onClick={handleClick} className="closeButton" style={{left:"317px",top:"16px"}}>X</div> */}

    <form className="addForm" onSubmit={handleSubmit}>
      <div className="formItem">
        <label>Show Name:</label>
        <br></br>
        <input
        type='text'
        id='name'
        value={formData.name}
        onChange={handleChange}/>
      </div>
      <div style={{position:"relative"}} className="formItem">
        <label>price:</label>
        <input
        
        
        type='text'
        id='price'
        value={formData.price}
        onChange={handleChange}/>
      </div>
      <div style={{position:"relative"}} className="formItem">
        <label>info:</label>
        <input
        
        type='text'
        id='info'
        value={formData.info}
        onChange={handleChange}/>
      </div>
      <div style={{position:"relative"}} className="formItem">
        <label>type:</label>
        <input
        type='text'
        id='type'
        value={formData.type}
        onChange={handleChange}/>
      </div>
      <div style={{position:"relative"}} className="formItem">
        <label>amount:</label>
        <input
        type='text'
        id='amount'
        value={formData.amount}
        onChange={handleChange}/>
      </div>
      <div>
        <label>Image</label>
        <br></br>
        <input
        type='text'
        id='img'
        value={formData.img}
        onChange={handleChange}/>
      </div>
      <div>
      <img className='ProductImg-S' src = {formData.img?`${formData.img}`:'https://imgs.search.brave.com/RVhvAn4kkMzSdJkFlO8xlUWHCSWgE7Tog5gRBGWYC3o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9paDEu/cmVkYnViYmxlLm5l/dC9pbWFnZS4xMjY1/NTg5NDE0LjM1MDQv/bXAsNTA0eDQ5OCxt/YXR0ZSxmOGY4Zjgs/dC1wYWQsNjAweDYw/MCxmOGY4ZjgudTMu/anBn'}></img>
      </div>
      
      <button style={{color:"black",borderColor:"black"}} className="start" type="submit">Add</button>
        
    </form>
    </>
  )
}

export default AddProduct