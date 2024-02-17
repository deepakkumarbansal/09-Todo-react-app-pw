import {createStore, combineReducers} from 'redux'

//Reducer import
import todoReducer from './reducers/todoReducer'

const reducers = combineReducers({todo:todoReducer}) //we have only one reducer but still we are using combine reducers so that if we have multiple reducers in future then we can use it
export const store = createStore(reducers);
console.log(store);