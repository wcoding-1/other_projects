import React from 'react';


function AllTask({allTask, handleDelete}) {
    return (
    
            <ul>           
             
             {allTask.map(({id, newtask})=>(
                <li key={id}>
                    <p>{newtask}</p>
                    <p onClick={()=> handleDelete(id)} className='delete'>x</p>
                </li>
             ))}
            </ul>
        
    );
}

export default AllTask;