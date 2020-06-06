// is NodesJs syntax
const redux = require('redux');
// createStore is a Function that allows us to make a new store!
const createStore = redux.createStore;
const initialState = {
      counter: 0
}


// Reducer 
// a store needs to be initials with a reducer! The reducer is strongly 
// connected to the stores and its only thing tham maybe update the state at the end!
// therefore i nedd to make my reducer first!
const rootReducer = (state = initialState, action) => {
return state; 
};


// Store
const store = createStore(rootReducer);
console.log(store.getState());




// Dispatching Action 



// Subscription