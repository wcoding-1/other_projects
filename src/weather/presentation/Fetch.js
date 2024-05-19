import React, {useState, useEffect} from "react";
import DATA from './Data'

export function get(endPoint) {
    let delay = Math.floor(Math.random() * 1000);

    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            if(!DATA.hasOwnProperty(endPoint)){
                const validEndPoint = Object.keys(DATA)
                .map((endpoint)=> `- ${endpoint}`).join("\n ");

                reject(`${endPoint}  is an invalid endpoint. try geting data from:\n
                status: 400.
                \n ${validEndPoint}`

                 );
            }
            const response = {status: 200, data:DATA[endPoint]}
            resolve(response);
           
        }, delay);

    });
    
}