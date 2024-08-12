const CatCard = ({ img,name }) => {
  const CDNURL = "https://hzlezhtofxpfmuntarie.supabase.co/storage/v1/object/sign/shop/"

  return (
    <div style={{display:"flex",flexDirection:"column",fontFamily:"'Playmaker', sans-serif"}}>
      <div className="card">
          <h3 className="clothing">{name}</h3>
          <img style={{}} className="cardImg" src={CDNURL+img} alt="Mini" />
        </div>
        <h1>{name}</h1>
    </div>
  );
};

export default CatCard;
