import { createStore, applyMiddleware, combineReducers } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './userDuck'
import galleryReducer from './Guillo/reducers/gallery';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    user:userReducer,
    gallery:galleryReducer,
})

export default () => {
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
    // traer algo del api que siempre se usa
    store.dispatch({
        type:"GET_TOKEN_FROM_LOCAL"
    })
    return store
}
