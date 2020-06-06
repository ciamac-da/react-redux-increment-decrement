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
      switch(action.payload){
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



// Dispatching Action 
// type is just a unique identify of your choice
// property name is totally up to you! in this case value:10 i mean
store.dispatch({type:'INC_COUNTER'});
store.dispatch({type:'ADD_COUNTER',  payload:{ value: 10}});
console.log(store.getState());

