import { useEffect, useState } from 'react';
import { Link, useOutletContext  } from 'react-router-dom';
import Filters from './Filters';


const Navbar = ({userData}) =>{
  const[login,setLogin]=useState();  

  useEffect(() => {
    console.log('Component rendered or count changed');
    // console.log(userData.length)
    if(userData.length === 0){
      setLogin("/login")
    }else{
      setLogin("/account")
    }
  }, [userData]);
  
  
   

    return(
      <>
      <div className='navbar'>
          <div className="navRight">

          <Link className="iconContainer">
            <img className="navIcon" src="https://hzlezhtofxpfmuntarie.supabase.co/storage/v1/object/sign/shop/CosmicIcon.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaG9wL0Nvc21pY0ljb24ucG5nIiwiaWF0IjoxNzIzNDg2MTM2LCJleHAiOjE3NTUwMjIxMzZ9.Ks7-Qf2HDd4vunE5IQeNirfWj4oyFYudxoMJ_ZJfRro&t=2024-08-12T18%3A08%3A56.680Z"></img>
            </Link>
          <h1 className="navTitle">Cosmic Supplies</h1>
          </div>
          <div className='navRight'>
            <div className="accountDiv">
            <img className="accountIcon" src="https://img.icons8.com/?size=100&id=84898&format=png&color=1A1A1A"></img>
            <Link to={login} className="navItem" >{userData.length === 0?'Login':`Account`}</Link>
            </div>
            <Link to={'/cart'}>
              <img className="cartIcon" src="https://img.icons8.com/?size=100&id=85080&format=png&color=FFFFFF"></img>
            </Link>
          </div>
        </div>
        <div className='underBar'>
          
           <Link to={'/all'} className='underItem'>Gem</Link>
           <h2 className='underItem'>Resin Planar</h2>
           <h2 className='underItem'>Mini Planar</h2>
          
          
        </div>
      </>
    )
  }

  export default Navbar