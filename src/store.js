import { applyMiddleware , createStore } from 'redux'
import ReduxThunk from "redux-thunk";
import Reducers from './Redux/Reducers'


const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk));

export default store;