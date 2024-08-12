import CatCard from "../components/CatCard"


const Home = () =>{
 const CDNURL = "https://hzlezhtofxpfmuntarie.supabase.co/storage/v1/object/sign/shop/"

 
   

    return(
      <>
      <div className='homePage'>
          {/* <img src='https://imgs.search.brave.com/oaR-MXzIsAcvQZalc-WeesYVq7ENiBmx9cAvsNiLV-o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzQ4LzI4LzY5/LzM2MF9GXzc0ODI4/Njk5OF9xMlNDcllW/d3preEl5c1B4bUlk/TklKQ1BmMlJtS21C/dy5qcGc' className='bannerImg'></img> */}
          <div className='cardContainer'>
            <img src=""></img>
            <CatCard name={"Cabs"} img={'Screenshot%202024-08-06%20000101.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaG9wL1NjcmVlbnNob3QgMjAyNC0wOC0wNiAwMDAxMDEucG5nIiwiaWF0IjoxNzIzNDgxMjkzLCJleHAiOjE3NTUwMTcyOTN9.xiyz7tFUGWstHfxVdhFSkGds4el1SSW4b1Gg-93Wq6o&t=2024-08-12T16%3A48%3A13.972Z'}/>
            
            <CatCard name={"Gems"} img={''}/>
            
            <CatCard name={"Resin Planar"} img={'Screenshot%202024-08-05%20223720.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaG9wL1NjcmVlbnNob3QgMjAyNC0wOC0wNSAyMjM3MjAucG5nIiwiaWF0IjoxNzIzNDgxMjU0LCJleHAiOjE3NTUwMTcyNTR9.cELz21JtxCg8FY2x2rdoBKXD3Uf_1C_aFyLt7Iu5iE4&t=2024-08-12T16%3A47%3A34.408Z'}/>
            
            <CatCard name={"Mini Planar"} img={'Screenshot%202024-08-05%20223705.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaG9wL1NjcmVlbnNob3QgMjAyNC0wOC0wNSAyMjM3MDUucG5nIiwiaWF0IjoxNzIzNDgwNjQ0LCJleHAiOjE3NTUwMTY2NDR9.5zYMyaqO6H3aOpye7ZETLgOhpr1mP8t4_aGCh5Qwrqc&t=2024-08-12T16%3A37%3A24.620Z'}/>
          </div>
        </div>
      </>
    )
  }
  export default Home