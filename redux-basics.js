/**
 * 
 // is NodesJs syntax
 const redux = require('redux');
 // createStore is a Function that allows us to make a new store!
 const createStore = redux.createStore;
 
 const initialState = {
      counter: 0
      
}

const INC_COUNTER = "INC_COUNTER"

const ADD_COUNTER = "ADD_COUNTER"


function incCounter(){
      return {
            type: INC_COUNTER,
            info: "INcrease!"
      }
}

function addCounter(){
      return {
            type: ADD_COUNTER,
            info: "Adding!"
      }
}

// Reducer 
// a store needs to be initials with a reducer! The reducer is strongly 
// connected to the stores and its only thing tham maybe update the state at the end!
// therefore i nedd to make my reducer first!
const rootReducer = (state = initialState, action) => {
      switch(action.type){
      case "INC-COUNTER": 
      return {
                  ...state,
                  counter: state.counter + 1
            };
            
      case "ADD-COUNTER":
            return {
                  ...state,
                  counter: state.counter + action.value
            };
            
            default: return state; 
}
};


// Store
const store = createStore(rootReducer);
console.log(store.getState());


// Subscription
store.subscribe(()=> {
      console.log("[Subscription]", store.getState());
})

const unsubscribe = subscribe(()=>{})

// Dispatching Action 
// type is just a unique identify of your choice
// property name is totally up to you! in this case value:10 i mean
store.dispatch({type:'INC_COUNTER'});
store.dispatch({type:'ADD_COUNTER',  value: 10});
console.log(store.getState());

store.dispatch(incCounter())
astore.dispatch(addCounter())
*/

const redux = require("redux");
// createStore is a Function that allows us to make a new store!
const createStore = redux.createStore;
//action
const INC_COUNTER = "INC_COUNTER"
const ADD_COUNTER = "ADD_COUNTER"
const plus = () => {
  return {
    type: INC_COUNTER
  }
}
const add = () => {
  return {
    type: ADD_COUNTER,
    value: 20
  }
}
// Reducer
// a store needs to be initials with a reducer! The reducer is strongly
// connected to the stores and its only thing tham maybe update the state at the end!
// therefore i nedd to make my reducer first!
const initialState = {
  counter: 0
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case INC_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      };
    case ADD_COUNTER:
      return {
        ...state,
        counter: state.counter + action.value
      };
    default:
      return state;
  }
};
// Store
const store = createStore(rootReducer);
console.log(store.getState());
// Subscription
store.subscribe(() => {
  console.log("[Subscription]", store.getState());
});
// Dispatching Action
// type is just a unique identify of your choice
// property name is totally up to you! in this case value:10 i mean
store.dispatch(plus());
store.dispatch(add());
console.log(store.getState());