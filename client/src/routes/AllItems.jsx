import { useOutletContext } from "react-router-dom"
import Item from "../components/Item";


const AllItems = () =>{
    const [userData, setUserData, allItems] = useOutletContext();

    console.log(allItems)
    let Items = allItems.map((items,index)=>{
    return <Item key={index} id={items.id} name={items.name} img={items.img} price={items.price} />
   })
   console.log("this is items: ",allItems)

    return(
      <>
      <div className="gridContainer">
        {Items}
      </div>
        
      </>
    )
  }
  export default AllItems