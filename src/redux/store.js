import { createStore, applyMiddleware, combineReducers } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './userDuck'
import thunk from 'redux-thunk'
import charsReducer, { getCharsFromLocal } from './charsDuck'


// RXJS
import {combineEpics, createEpicMiddleware} from "redux-observable";
import {of} from "rxjs";
import {delay} from "rxjs/operators";
import appReducer, {fetchCharsEpic, fetchCharsOnDemand,
    fetchWithQueryEpic,
    contactFormEpic
}  from './observableDuck'
 

const epic1 = () => of({type: "SET_NAME", payload: "Blissito"}).pipe(delay(2000));

const rootEpic = combineEpics(epic1, 
    fetchCharsEpic, 
    fetchCharsOnDemand,
    fetchWithQueryEpic,
    contactFormEpic
    );

const epicMiddleware = createEpicMiddleware();



const rootReducer = combineReducers({
    user:userReducer,
    chars:charsReducer,
    app: appReducer
})

export default () => {
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(
                                                                                thunk, 
                                                                                epicMiddleware
                                                                                )))
    // traer algo del api que siempre se usa
    // store.dispatch({
    //     type:"GET_CHARS_FROM_LOCAL"
    // })
    // getCharsFromLocal()(store.dispatch)
    // epicMiddleware.run(rootEpic); // siendo observado
    return store
}
