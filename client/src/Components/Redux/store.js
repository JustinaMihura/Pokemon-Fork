import {createStore , compose , applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk"
import reducer from "./reducer.js"


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// para que redux-devtool funcione

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunkMiddleware)));
// para que podamos ahcer peticiones a la api 


export default store;