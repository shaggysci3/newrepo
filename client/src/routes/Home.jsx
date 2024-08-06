import CatCard from "../components/CatCard"


const Home = () =>{
 

 
   

    return(
      <>
      <div className='homePage'>
          {/* <img src='https://imgs.search.brave.com/oaR-MXzIsAcvQZalc-WeesYVq7ENiBmx9cAvsNiLV-o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzQ4LzI4LzY5/LzM2MF9GXzc0ODI4/Njk5OF9xMlNDcllW/d3preEl5c1B4bUlk/TklKQ1BmMlJtS21C/dy5qcGc' className='bannerImg'></img> */}
          <div className='cardContainer'>
            <CatCard name={"Cabs"} img={'./src/assets/Cabochon.png'}/>
            
            <CatCard name={"Gems"} img={'https://imgs.search.brave.com/HEdeqpfnZMmLSjFuyqTr4wqiAOhPUaPTOMoSnURCQP4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMy/MjY0MjUxNC92ZWN0/b3IvZ2VtLXZlY3Rv/ci1pY29ucy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9ZGZI/NEl2MkhCWE51SWF1/VXJ2cmxvb2dsc3Fa/aFQxQ1hoYU1YRWJT/d2pYbz0'}/>
            
            <CatCard name={"Resin Planar"} img={'./src/assets/Resin.png'}/>
            
            <CatCard name={"Mini Planar"} img={'./src/assets/Mini.png'}/>
          </div>
        </div>
      </>
    )
  }
  export default Home