import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const[allShows,setAllShows]=useState([])
  const server = import.meta.env.VITE_URL

  


 

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`${server}/api/users`);
      const ShowArr = await response.json();
      setAllShows(ShowArr);
    };
    fetchProducts().catch(console.error);
  }, []);
  console.log(allShows)

  // fetch something to the url of make variable at top called "const server = import.meta.env.VITE_URL"
  // "const url = `${server}/<endpoint>`"; this would be the equivilent of a fetch to an api or localhost server fetch
  return (
    <>
      <div>
        <div className='navbar'>
          <h1>Lex's Emporium</h1>
          <div className='navRight'>
            <h1 className='navItem'>Shop</h1>
            <h1 className='navItem'>Cart</h1>
          </div>
        </div>
        <div className='homePage'>
          <img src='https://imgs.search.brave.com/oaR-MXzIsAcvQZalc-WeesYVq7ENiBmx9cAvsNiLV-o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzQ4LzI4LzY5/LzM2MF9GXzc0ODI4/Njk5OF9xMlNDcllW/d3preEl5c1B4bUlk/TklKQ1BmMlJtS21C/dy5qcGc' className='bannerImg'></img>
          <div className='cardContainer'>
            <div className='card'>
              <h3 style={{margin:"unset"}}>Clothing</h3>
              <img className='cardImg' src='https://imgs.search.brave.com/IqEUo1g3pMW4CDA-p9bIs3ic60K6At4PFv60U6TYfIA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMjIvVC1T/aGlydC1QTkctSXNv/bGF0ZWQtVHJhbnNw/YXJlbnQtSEQtUGhv/dG8ucG5n'></img>
            </div>
            <div className='card'>
              <h3 style={{margin:"unset"}}>Clothing</h3>
              <img  className='cardImg' src='https://imgs.search.brave.com/XZG6RgbFYQYArIfntJ_5gzNWGlHfMAlfBMWsyjBCoho/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzI2MTU2ODYzL2Mv/MTU1Mi8xNTUyLzI1/MC8wL2lsL2U5Nzli/NS8zNjU5NzgyNTY1/L2lsXzYwMHg2MDAu/MzY1OTc4MjU2NV9q/NXc1LmpwZw'></img>
            </div>
            <div className='card'></div>
            <div className='card'></div>
            <div className='card'></div>
            
          </div>
        </div>

        
      </div>
      
    </>
  )
}

export default App
