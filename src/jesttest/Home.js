 
 import React, {useState} from "react";

 function Home(params) {

    const [count, setCount]=useState(0)

    const increament = ()=>{
        setCount((prev)=> prev + 1);
    }
    return(
        <>
        <h2>{count}</h2>

        <button onClick={increament}>Add</button>
        
        </>
    )
    
 }

 export default Home;