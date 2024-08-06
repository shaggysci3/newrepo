

const Navbar = () =>{
 

 
   

    return(
      <>
      <div className='navbar'>
          <div className="navRight">

          <div className="iconContainer">
            <img className="navIcon" src="./src/assets/CosmicIcon.png"></img>
            </div>        
          <h1 className="navTitle">Cosmic Supplies</h1>
          </div>
          <div className='navRight'>
            <div className="accountDiv">
            <img className="accountIcon" src="https://img.icons8.com/?size=100&id=84898&format=png&color=1A1A1A"></img>
            <h2 className="navItem" >Account</h2>
            </div>
            <img className="cartIcon" src="https://img.icons8.com/?size=100&id=85080&format=png&color=FFFFFF"></img>
          </div>
        </div>
      </>
    )
  }

  export default Navbar