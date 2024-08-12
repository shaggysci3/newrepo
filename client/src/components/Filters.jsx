import { useLocation } from "react-router-dom"


const Filters = () =>{
  

    return(
      <>
      {location.pathname ==="/"?<>
      <div>{location.pathname}</div>
      </>:<>
      <ul class="breadcrumbs">
        <div></div>
        <a href="/" class="breadcrumbs-item">
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