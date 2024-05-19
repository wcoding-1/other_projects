import React, {useState} from 'react';
// import NewTask from './modules/NewTask';
// import './modules/style.css';
// import AllTask from './modules/AllTask'
// import Forcast from './weather/Forcast';
// import TopLevel from './breadScoreGame/TopLevel';
// import StudentForm from './student-form/StudentForm';
// import TopLevel from './food-order-form/TopLevel';
// import Game from './rock-pepper-scissor/Game';
// import SocialNetwork from './mySocialApp/SocialApp';
import TopLevel from './jesttest/TopLevel';
function App() {
  // const [tasks, setTask] = useState({});
  // const [allTask, setAllTask] = useState([]);

  // function handleChange({target}) {
    
  //   const {name, value} = target;
  //   setTask((prev)=> ({...prev, id:Date.now(), [name]:value}));

  // }

 
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if(!tasks.newtask) return;
  //   setAllTask((prev)=> [tasks, ...prev]);
  //   setTask({});

  // }

  // const handleDelete = (taskId)=>{
  //   setAllTask(
  //    allTask.filter(({id, newtask})=>{
  //       if(taskId !== id){
  //         return newtask;
  //       }
  //    })
  //   )
  // }
  // return (
  //   <div className='main'>
    
  //     <NewTask onHandlChange={handleChange} onTask={tasks} onHandleSubmit={handleSubmit}/>
  //     <AllTask allTask={allTask} handleDelete={handleDelete}/>
  //   </div>
  // )
  //end of form task

  return <TopLevel/>
   
  
}

export default App;
