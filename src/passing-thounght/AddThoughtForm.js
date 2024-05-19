import React, {useState} from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm({addThought}) {
  const [text, setText] = useState('');

  const handleTextChange =({target})=>{
    //   if(!target.value) return;
    setText(target.value);
  
    // addThought(text);
  }


  const handleSubmit = (event) =>{
    event.preventDefault();
    if(!text)return;
  const thounght = { 
        id:generateId(),
        text:text,
        expiresAt:getNewExpirationTime()
      }
   
    addThought(thounght);
    
  } 
  return (
    <form 
    className="AddThoughtForm"
   onSubmit={handleSubmit}
    >
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        onChange={handleTextChange}
     
      />
      <input type="submit" value="Add" />
    </form>
  );
}
