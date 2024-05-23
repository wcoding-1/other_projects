

function increment(params) {
    return {type:'increment'}
}

function decrement(params) {
   return { type:'decrement'}
}

let init= 0;
export function countReducers(state=init, action){
    switch(action.type){
        case 'increment':{
            return state + 1;
        }

        case 'decrement':{
            return state - 1;
        }

    }
}











