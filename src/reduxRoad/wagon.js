// const {
//   supplies: 100,
//   distance: 0,
//   day: 0

// }

const initialWaganState = {
    supplies: 100,
    distance: 0,
    day: 0,
    cash:200
  }
  
  
  const adventureReducer = (state = initialWaganState, action) =>{
  
    switch(action.type){
       case 'gather': {
       return {
        ...state, supplies: state.supplies + 15,
        distance: state.distance,
        day: state.day + 1
        };
      }
  
       case 'travel': {
        let days = action.payload;
        let travelStatus = state.supplies - (20 * days)
  
        if(travelStatus < 0){
          return state;
        }
  
       return {
        ...state,
        supplies: travelStatus,
        distance: state.distance + 10,
        day: state.day + days
      
      }
       }
       case 'tippedWagon': {
         return {
          ...state,
          supplies: state.supplies - 30,
          day: state.day + 1
       
         }
      }
  
      case 'sell':{
       return {...state,
        supplies: state.supplies - 20,
        cash: state.cash + 5
        }
      }
  
      case 'buy':{
       return {
          ...state,
          supplies: state.supplies + 25,
          cash: state.cash - 15
        }
      }
  
      case "theft":{
       return {
         ...state,
        cash: state.cash / 2
       }
      }
       default:
        return state;
    }
  
  }
  
  let wagon = adventureReducer(undefined, {});
   console.log(wagon)
    wagon = adventureReducer(wagon, {type:'travel',payload:1});
   console.log(wagon)
  
    wagon = adventureReducer(wagon, {type:'gather',payload: null});
   console.log(wagon)
  
     wagon = adventureReducer(wagon, {type:'tippedWagon',payload: null});
   console.log(wagon)
  
      wagon = adventureReducer(wagon, {type:'travel',payload: 3});
   console.log(wagon)
  
    
     wagon = adventureReducer(wagon, {type:'sell',payload: null});
   console.log(wagon)
     wagon = adventureReducer(wagon, {type:'buy',payload: null});
   console.log(wagon)
  
    
     wagon = adventureReducer(wagon, {type:'theft',payload: null});
   console.log(wagon)
  
  
  
  
  
   