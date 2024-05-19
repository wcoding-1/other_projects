import React from "react";

function NewTask({onHandlChange,onTask, onHandleSubmit}) {
    return(
        <>

        <form  onSubmit={onHandleSubmit}>
            <>
            <input 
            type="text" 
            name='newtask'
            value={onTask.newtask || ''}
            placeholder="New Task"
            onChange={onHandlChange}
            
            />
            </>
           
    {!onTask.newtask? null :
        <>
            <button type="submit">Add Task</button>
            
            <br />

            <textarea 
            name="description"
             cols='95' 
             rows='10'
             placeholder="Detail..."
             >

            </textarea>
        
        </> 
    }
        </form>
        </>
    )
}

export default NewTask;
