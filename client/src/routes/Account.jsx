import { useOutletContext,useNavigate } from 'react-router-dom'
import AccDisplay from '../components/AccDisplay';
import AddProduct from '../components/AddProduct';


const Account = () =>{
    const [userData, setUserData] = useOutletContext();
    const navigate = useNavigate()

    function handleClick(){
      navigate('/login')
    }
 
   

    return(
      <>
      
      {userData.name?<>
      <AddProduct/>
      <h1>Welcome {userData.name?userData.name:""}</h1>
      <div className='accountPage'>
        <div className='accountLeft'>
            <ul>
                <h1>Settings</h1>
                <li>general</li>
                <li>purchases</li>
            </ul>
        </div>
        <div className='accountRight'>
            <AccDisplay/>
        </div>
      </div>
      </>:<>
      <h1>Please <a style={{color:"blue",textDecoration:"underline",cursor:"pointer"}} onClick={handleClick} >Login</a> to access account</h1>
      </>}
        
      </>
    )
  }
  export default Account