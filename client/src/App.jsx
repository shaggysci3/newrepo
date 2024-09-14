import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {
  createBrowserRouter,
  RouterProvider,
  useLocation
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Outlet } from "react-router-dom";
import ErrorPage from './routes/ErrorPage'
import Home from './routes/Home'
import Login from './routes/login'
import Account from './routes/Account'
import Filters from './components/Filters'
import Game from './routes/Game'
import Signup from './components/AddProduct'
import AddProduct from './components/AddProduct'
import Cart from './routes/Cart'
import AllItems from './routes/AllItems'

function App() {
  
  const server = import.meta.env.VITE_URL
  const[userData,setUserData]=useState([])
  const[allItems,setAllItems]=useState([])

     
    useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`${server}/api/products`);
      const ItemArr = await response.json();
      setAllItems(ItemArr);
    };
    fetchProducts().catch(console.error);
  }, []);
  // console.log(allItems)



  

  


 

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const response = await fetch(`${server}/users`);
  //     const ShowArr = await response.json();
  //     setAllShows(ShowArr);
  //   };
  //   fetchProducts().catch(console.error);
  // }, []);
  // console.log(allShows)

  // useEffect(() => {
  //   console.log("Current route is:", location.pathname);
  // }, [location]);
  
  // fetch something to the url of make variable at top called "const server = import.meta.env.VITE_URL"
  // "const url = `${server}/<endpoint>`"; this would be the equivilent of a fetch to an api or localhost server fetch
  return (
    <>
      <div className="siteContainer">
        
      <Navbar userData={userData}/>
      <Filters/>
      <Outlet context={[userData,setUserData,allItems]}/>
      <Footer/>
      
      
    </div>
    </>
  )
}


const router = createBrowserRouter([
  {
    
    
    element: <App/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/account",
        element:<Account/>
      },
      {
        path:"/game",
        element:<Game/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/all",
        element:<AllItems/>
      }
      
    ]
  }
  
  
  
]);


createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

