import { createStore, combineReducers, applyMiddleware } from 'redux'
import userReducer from './userDuck'
import thunk from 'redux-thunk'
import productsReducer from './productsDuck'

const rootReducer = combineReducers({
    user:userReducer,
    products:productsReducer
})

export default () => {
    const store = createStore(rootReducer, applyMiddleware(thunk)) // async
    // algo previo
    console.log(store.getState())
    return store
}