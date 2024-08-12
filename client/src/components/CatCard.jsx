const CatCard = ({ img,name }) => {
  

  return (
    <div style={{display:"flex",flexDirection:"column",fontFamily:"'Playmaker', sans-serif"}}>
      <div className="card">
          <h3 className="clothing">{name}</h3>
          <img style={{}} className="cardImg" src={img} alt="Mini" />
        </div>
        <h1>{name}</h1>
    </div>
  );
};

export default CatCard;
