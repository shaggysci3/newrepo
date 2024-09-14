import { useEffect, useState } from 'react'
import '../Game.css'

const Game = () =>{
    const[gameState,setGameState]=useState('')
    const[sammy,setSammy]=useState([])
    const[currentRequest,setCurrentRequest]=useState([])
    const ingredients = ['american','cheddar','swiss','tomato','chicken']



    function generateSammy(){
        const ingredientsIndex = Array.from({ length: 4 }, () => Math.floor(Math.random() * ingredients.length) );
        setCurrentRequest([ingredients[ingredientsIndex[0]],ingredients[ingredientsIndex[1]],ingredients[ingredientsIndex[2]],ingredients[ingredientsIndex[3]]])
        // console.log("sammy array", ingredientsIndex)
        
    }

    useEffect(() => {
        generateSammy()
      }, []);
    //   useEffect(() => {
    //     console.log(currentRequest)
    //   }, [currentRequest]);

    function handleClick(e){
        if(sammy.length<4){
            setSammy([...sammy,e.target.value])
            // console.log(e.target.value)
        }
    }

    
    function compairSammy(){
        if(sammy.every((value, index) => value === currentRequest[index])&&sammy.length===currentRequest.length){
            alert("great Job");
            setSammy([])
            generateSammy();
        }else{
            console.log(`${sammy} is not equal to ${currentRequest}`)
        }
    }
    function handleCreateSammy(e){
        compairSammy()
        // console.log("hello world")
        setSammy([])
    }
    function menuState(){
      setGameState('menu')
    }
    function buyState(){
      setGameState('buy')
    }
    function playState(){
      setGameState('play')
    }
    function resultState(){
      setGameState('result')
    }


    return(

      <>
      {gameState==='menu'?<>
        <div>
          <h1>menu</h1>
          <button onClick={playState} >Resume</button>
        </div>
      </>:<>
      <div className='animate' ></div>
      <button onClick={menuState}>Pause</button>
      <div className='gameSammyDisplay'>
        <div className='sammyDisplay'>

        <div className='sammy'>
        <p>{currentRequest}</p>
        <img className='bread'></img>
      <img className={`${currentRequest[3]}`}></img>
      <img className={`${currentRequest[2]}`}></img>
      <img className={`${currentRequest[1]}`}></img>
      <img className={`${currentRequest[0]}`}></img>
      <img className='bread'></img>
        </div>
      <div className='sammy'style={{}}>
      <img className='bread'></img>
      <img className={`${sammy[3]}`}></img>
      <img className={`${sammy[2]}`}></img>
      <img className={`${sammy[1]}`}></img>
      <img className={`${sammy[0]}`}></img>
      <img className='bread'></img>
      </div>
        </div>
        <br/>


      </div>
      
      <div className="gameContainer">
        
        <img className='gameCounter' src='https://art.pixilart.com/sr2b96e59c82faws3.png'></img>
        <div className='gameIgredients'>
            <button onClick={handleClick} value={'american'} className='gameButton'>American</button>
            <button onClick={handleClick} value={'cheddar'} className='gameButton'>Cheddar</button>
            <button onClick={handleClick} value={'swiss'} className='gameButton'>Swiss</button>
            <button onClick={handleClick} value={'tomato'} className='gameButton'>Tomato</button>
            <button onClick={handleClick} value={'chicken'} className='gameButton'>Chicken</button>
            <button onClick={handleClick} value={'bread'} className='gameButton'>Bread</button>
            <button onClick={handleCreateSammy} value={sammy} className='gameButtonCreate'>Create Sammy</button>
            <p>{sammy}</p>
        </div>
      </div>
        
      </>}
      </>
    )
  }
  export default Game