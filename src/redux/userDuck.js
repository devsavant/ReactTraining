const initialState = {
    displayName: "Blissito"
}

const GET_TOKEN_FROM_LOCAL = "GET_TOKEN_FROM_LOCAL"
const TRANSFORM_TOKEN = "TRANSFORM_TOKEN"
const TRANSFORM_DISPLAY_NAME = "TRANSFORM_DISPLAY_NAME"

export default (state=initialState, action) => {
    switch(action.type){
        case GET_TOKEN_FROM_LOCAL:
            return {...state, token: "olavvque+puez"}
        case TRANSFORM_TOKEN:
            return { ...state, token: action.payload }
        case TRANSFORM_DISPLAY_NAME:
            return { ...state, displayName: action.payload }
        default:
            return state
    }
}

// action creators

// action thunks
export const transformTokenAction = (token) => (dispatch) => {
    dispatch({
        type: TRANSFORM_TOKEN,
        payload: token
    })
}

export const transformDisplayNameAction = (value) => dispatch => {
    dispatch({
        type: TRANSFORM_DISPLAY_NAME,
        payload: value
    })
}
