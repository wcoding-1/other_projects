
import React, {useState} from "react";


const CHOICES = [
    { name: "rock", emoji: "✊" },
    { name: "paper", emoji: "✋" },
    { name: "scissors", emoji: "✌️" },
    
  ];


  const main = {
    textAlign:'center',
  }
  const style={
    display:'flex',
    justifyContent:'center',
  
  }

  const emojis = {
    border:'1px solid',
    padding:'20px',
    fontSize:'3rem',
    cursor:'pointer',
  }


  const resetBtn = {
    padding:'20px 40px',
    border:'none',
    backgroundColor:'orange',
    cursor:'pointer',

  }

function Game() {
  const [cadyChoice, setcadyChoice] = useState('');
  const [humanChoice, sethumanChoice] = useState('');
  const [win, setWin] = useState('');

  function getCady(params) {

  }
 

  function playGame(user, emoji) {
    let index = Math.floor(Math.random() * CHOICES.length);
    let choice = CHOICES[index];
    setcadyChoice(choice.emoji)
    sethumanChoice(emoji)
  

   if(user === choice.name){
      setWin('Tie!');
   }else 
   if((user === 'rock' && choice.name === 'scissors') || 
      (user === 'paper' && choice.name === 'rock') ||
      (user === 'scissors' && choice.name === 'paper') )
    {
      setWin('You Win!');
   }else{
      setWin('You Lose!');
   }
   
    
  }

  const reset = ()=>{
    setcadyChoice(null);
    sethumanChoice(null);
    setWin(null);
  }



  return(
    <>
      <div style={main}>
        <header>
          <h1>Rock, Pepper and Scissor</h1>
        </header>

        <section style={style}>
          {CHOICES.map(({emoji, name})=>(
            <>
            
            <p style={emojis} onClick={()=>playGame(name, emoji)}>{emoji}</p>
            </>
          ))}
        </section>

        <section>
          <div>
            <h2>Your Chose {humanChoice}</h2>
          </div>

          <div>
            <h2>Cady Chose {cadyChoice}</h2>
          </div>
        </section>


          <div>
            <h2>{win}</h2>
          </div>


        <button style={resetBtn} onClick={reset}>Reset</button>


      </div>

    </>
  )
    
  }

  export default Game;