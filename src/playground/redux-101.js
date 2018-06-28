import {createStore} from 'redux';

console.log("from redux");


/*****************************ACTION GENERATORS****************************************** */


const incrementCount=({incrementBy=1}={})=>({ 
    type:'INCREMENT',
    incrementBy:incrementBy
});


const decrementCount=({decrementBy=1}={})=>({
    type:'DECREMENT',
    decrementBy:decrementBy
});



const setCount=({count=0}={})=>({
    type:'SET',
    count:count
});


const reset=()=>({
    type:'RESET'
});

//REDUCERS**********************************************************************************
// 1. Reducers are pure functions
// 2. Never change state or actiton


const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          count: state.count + action.incrementBy
        };
      case 'DECREMENT':
        return {
          count: state.count - action.decrementBy
        };
      case 'SET':
        return {
          count: action.count
        };
      case 'RESET':
        return {
          count: 0
        };
      default:
        return state;
    }
  };
    
   

/*****************************STORE************************************************************ */
const store=createStore(countReducer);



store.subscribe(()=>{
    console.log(store.getState());
});




//******************************actions************************************************************************

//increment count
store.dispatch(incrementCount({ incrementBy:5}));


//increment count
store.dispatch(incrementCount());


//reset count
store.dispatch(reset());

//decrement count
store.dispatch(decrementCount());

//decrement count
store.dispatch(decrementCount({decrementBy:10}));

//SET
store.dispatch(setCount({count:101}));




