const initlaState = {
    array:[],
    fetching:false,
    error:null
}
const GET_CHARS_FROM_LOCAL = "GET_CHARS_FROM_LOCAL"
const GET_CHARS = "GET_CHARS"
const GET_CHARS_SUCCESS = "GET_CHARS_SUCCESS"
const GET_CHARS_ERROR = "GET_CHARS_ERROR"
const GET_CHARS_AVOID = "GET_CHARS_AVOID"

export default (state=initlaState, action) => {
    switch(action.type){
        case GET_CHARS:
            return {...state, fetching: true}
        case GET_CHARS_SUCCESS:
            return {...state, array: [...action.payload], fetching:false }
        case GET_CHARS_ERROR:
            return {...state, error: action.payload, fetching:false }
        case GET_CHARS_AVOID:
            return {...state, fetching:false}
        case GET_CHARS_FROM_LOCAL:
            return { ...action.payload }
        default:
            return state
    }
}

// -- ACTIONS CREATORS
const getChars = () => ({type:GET_CHARS})
const getCharsError = (payload) => ({type:GET_CHARS_ERROR, payload})

// -- AUX functions
function saveToStorage(state){
    localStorage.chars = JSON.stringify(state)
}
function retreiveStorage(){
    
    return localStorage.getItem('chars') ? JSON.parse(localStorage.getItem('chars')) : initlaState
}

// -- THUNKS
export const getCharsFromLocal = () => (dispatch) => {
    const state = retreiveStorage()
    dispatch({type: GET_CHARS_FROM_LOCAL, payload: state })
}

export const getCharsAction = () => (dispatch, getState) => {
    let state = getState() // NO ES PAGINADA LA API
    dispatch(getChars())
    if(state.chars.array.length) {
        return dispatch({type: GET_CHARS_AVOID})
    }
    fetch("https://rickandmortyapi.com/graphql", {
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(
            {"query":"{characters\n{results{\nid\n name\n image\n species}}}"}
        )
    })
    .then(r=>r.json())
    .then(response=>{
        // validaciones si son necesarias
        dispatch({
            type: GET_CHARS_SUCCESS,
            payload: response.data.characters?.results // chars
        })
        state = getState()
        saveToStorage(state.chars)
    })
    .catch(e=>{
        console.log(e)
        // aqui podriamos agregar validaciones
        dispatch(getCharsError(e.response.message))
    })
}

