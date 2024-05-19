import React from 'react';
import {highScores} from './highScoreData';
import styles from './HighScore.module.css';

 function HighScore (){
  
  return(
    
    <div className={styles.div}>
      {highScores.map(({username, date,score}, i)=>(
        <ul className={styles.ul}>
            <li key={i} className={styles.li}>{username}</li>
            <li key={i} className={styles.li}>{date}</li>
            <li key={i}>{score}</li>
        </ul>
       
      ))}
    </div>
  )

 } 

 export default HighScore;