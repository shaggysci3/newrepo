import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useOutletContext, useNavigate, Navigate } from 'react-router-dom'
import Signup from '../components/SIgnup';

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: ""
  });
  const [userData, setUserData] = useOutletContext();
  const [loading, setLoading] = useState(false);
  const [logged, setLogged] = useState(false);
  const server = import.meta.env.VITE_URL;
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const newUser = {
      username: userInfo.username,
      password: userInfo.password
    };
    console.log(newUser);
    try {
      const response = await fetch(`${server}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        setLogged(false);
        alert(`Validation error: ${errorResponse.errors.join(", ")}`);
        console.error(`Failed to add user. Status: ${response.status}`, errorResponse);
        return;
      }

      const addedUser = await response.json();
      sessionStorage.setItem('token', JSON.stringify(addedUser));
      console.log(addedUser);
      setLogged(true);
      setUserData(addedUser);

      setUserInfo({
        username: "",
        password: "",
      });
      navigate('/account')

    } catch (error) {
      console.error("Error adding user:", error);
    } finally {
      setLoading(false);
    }
  }

  function handleChange(e) {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
    <div className='loginSignup'>

      <div className='pageContainer'>
      <h1 className='navTitle' >Login</h1>
        <div id='mydiv' style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', alignItems: 'center', flexDirection: "column" }}>
          {logged ? (<h1>you are logged in {userData.name}</h1>) : (<><div>
            <div id='card' style={{ display: 'flex' }}>
              <Form style={{ alignItems: "center" }} className='form' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control onChange={handleChange} type="text" value={userInfo.username} name='username' placeholder="Enter User Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control onChange={handleChange} type="password" placeholder="Password" value={userInfo.password} name='password' />
                </Form.Group>
                <Button style={{marginTop:"10px"}} className='loginButton' type='submit'>submit</Button>
              </Form>
            </div>
          </div></>)}
          {loading ? <>
            <img src='https://media1.giphy.com/media/ZBQhoZC0nqknSviPqT/giphy.webp?cid=790b76113a8mnmiu77055p86djrbg9zs0uwf8hxud4njltx5&ep=v1_gifs_search&rid=giphy.webp&ct=g'></img>
          </> : <></>}
        </div>
      </div>
    <Signup/>
    </div>
    </>
  );
}

export default Login;
