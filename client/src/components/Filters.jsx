import { useLocation,useNavigate, } from "react-router-dom"


const Filters = () =>{
  const navigate = useNavigate()

  function handleClick(){
    navigate('/')
  }
    return(
      <>
      {location.pathname ==="/"?<>
      <div>{location.pathname}</div>
      </>:<>
      <ul class="breadcrumbs">
        <div></div>
        <a onClick={handleClick} class="breadcrumbs-item">
          <li>Home</li>
        </a>
        
          <li className="breadcrumbs-arrow"></li>
        

        {/* <a href="#" class="breadcrumbs-item">
          <li>All</li>
          </a> */}

    <li class="breadcrumbs-item">{location.pathname.substring(1)}</li>
</ul>
          </>}
        
      </>
    )
  }
  export default Filters