import React, {useState,useEffect} from 'react'
import './App.css';

function App() {
  const [userChoice, setUserChoice]=useState('rock')
  const[computerChoice,setComputerChoice]=useState('rock')
  const[userPoints, setUserPoints]=useState(0)
  const[computerPoints, setComputerPoints]=useState(0)
  const[turnResult, setTurnResult]=useState(null)
  const[result, setResult]=useState('let\'s see who wins')
  const[gameOver, setGameOver]=useState(false)
  const [dayMode, setDayMode] = useState(true);

  const choices=['rock','paper','scissors']
  const handleOnClick=(choice)=>{
    setUserChoice(choice)
    generateComputerChoice()
  }

  const generateComputerChoice=()=>{
    const randomChoice=choices[Math.floor(Math.random()*choices.length)]
    setComputerChoice(randomChoice)
  }

  const reset=()=>{
    window.location.reload()
  }
  const toggleMode = () => {
    setDayMode(!dayMode);
  };

  useEffect(()=>{
    const comboMoves=userChoice + computerChoice
    if(userPoints<=2 && computerPoints<=2){
      if(comboMoves==='rockscissors'|| comboMoves=== 'paperrock'|| comboMoves=== 'scissorspaper'){
        const updatedUserPoints=userPoints+1
        setUserPoints(updatedUserPoints)
        setTurnResult('User got the point')
        if(updatedUserPoints===3){
          setGameOver(true)
          setResult('User wins')
        }
      }
      if(comboMoves==='papercissors'|| comboMoves=== 'rockpaper'|| comboMoves=== 'scissorsrock'){
        const updatedComputerPoints=computerPoints+1
        setComputerPoints(updatedComputerPoints)
        setTurnResult('Computer got the point')
        if(updatedComputerPoints===3){
          setGameOver(true)
          setResult('Computer wins')
        }
      }
      if(comboMoves==='rockrock'|| comboMoves=== 'paperpaper'|| comboMoves=== 'scissorsscissors'){
        setTurnResult('No one got a point')
      }
    }
    

  },[userChoice, computerChoice])

  return (
  <div className={`bg ${dayMode ? 'day-mode' : 'night-mode'}`}>
    <div className="App">
    <div className="toggle-mode" onClick={toggleMode}>
        {dayMode ? 'Switch to Night Mode' : 'Switch to Day Mode'}
      </div>
      <h1 className="heading">ROCK PAPER SCISSORS</h1>
      <div className="score">
        <h1>User Points : {userPoints}</h1>
        <h1>Computer Points : {computerPoints}</h1>
      </div>
      <div className="choices">
  <div className="choices-user">
    <img src={`../images/${userChoice}.png`} alt="" className="user-hand" />
  </div>
  <div className="choices-computer">
    <img src={`../images/${computerChoice}.png`} alt="" className="computer-hand" />
  </div>
</div>
      <div children='button-div'>{choices.map((choice,index)=>
      <button className="button" key={index} onClick={()=>
      handleOnClick(choice)}>
        {choice}
      </button>
      )}
    </div>
    <div className="result">
      <h1>Turn Result : {turnResult}</h1>
      <h1>Final Result : {result}</h1>
    </div>

    <div className="button-reset">
      {gameOver && 
        <button className="button-reset" onClick={()=>reset()}>Play Again!!!</button>
      }
    </div>
    </div>
    
  </div>
  );
}

export default App;
