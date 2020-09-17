import { createStore, applyMiddleware, combineReducers } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './userDuck'
import thunk from 'redux-thunk'
import charsReducer, { getCharsFromLocal } from './charsDuck'
// actions to dispatch

const rootReducer = combineReducers({
    user:userReducer,
    chars:charsReducer
})

export default () => {
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
    // traer algo del api que siempre se usa
    // store.dispatch({
    //     type:"GET_CHARS_FROM_LOCAL"
    // })
    getCharsFromLocal()(store.dispatch)
    return store
}
