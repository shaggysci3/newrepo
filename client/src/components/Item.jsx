

const Item = ({id,name,img,price}) =>{
 console.log(id,name,price)

 
   

    return(
      <>
      <div className="Item">
        <h1>name: {name}</h1>
        <img className="itemImg" src={img}></img>
        <h2>price:{price} </h2>
      </div>
        
      </>
    )
  }
  export default Item