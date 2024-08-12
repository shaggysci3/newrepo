import { useOutletContext } from 'react-router-dom'
import AccDisplay from '../components/AccDisplay';


const Account = () =>{
    const [userData, setUserData] = useOutletContext();

 
   

    return(
      <>
      <h1>Welcome {userData.name}</h1>
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
        
      </>
    )
  }
  export default Account