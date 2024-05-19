
import React, {useState, useEffect} from "react";
import {get} from './presentation/Fetch';
import './style.css';

function Forcast(){
    const [data, setData] = useState([]);
    const [forcast, setForcast] = useState('/daily');

    useEffect(()=>{
        // alert('Requesting data from server........');
     get(forcast).then((response)=>{

        // alert(JSON.stringify(response, '', 2));
        let jsonResponse = JSON.stringify(response, '', 2)

        // alert(jsonResponse);
        setData(response.data);
       
     }).catch((error)=>{
        alert(error)
     })

     
     

   
    },[forcast]);


 if(!data) return;

    return(
        <div id="forcast">
            <h1>My Weather planner</h1>
            <div id="button">
                <button onClick={()=> setForcast("/daily")}>5 days</button>
                <button onClick={()=> setForcast("/hourly")}>Week</button>

            </div>

            
            <table>
                
                <thead>
                    <tr>
                        <th>Summary</th>
                        <th>Avg TEmp</th>
                        <th>Prec</th>
                        <th>Note</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((item ,i) => (
                        <tr key={item.id}>

                          <td>{item.summary}</td>
                          <td>{item.temp}</td>
                          <td>{item.precip}%</td>
                          <td>
                              <input type="text" name="note"></input>
                          </td>
      
                        </tr>
                    ))}
               
                   
               
                
                </tbody>
            </table>
        </div>
    );

}

export default Forcast;