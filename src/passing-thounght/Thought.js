import React, {useEffect} from 'react';

export function Thought(props) {
  const { thought, removeThought } = props;

  const handleRemoveClick = () => {
    removeThought(thought.id);
  };


  // useEffect(()=>{

  //   const myTimeout = setTimeout(()=>{
  //     removeThought(thought.id)
  //      const timeRemaining = thought.expiresAt - Date.now();
     
       
  //   }, 6000)
  //   return ()=>{
  //       clearTimeout(myTimeout)
  //   }
  // },[thought]);
  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
}
