const CatCard = ({ img,name }) => {
  

  return (
    <>
      <div className="card">
          <h3 className="clothing">{name}</h3>
          <img style={{}} className="cardImg" src={img} alt="Mini" />
        </div>
        {/* <h1>Name</h1> */}
    </>
  );
};

export default CatCard;
