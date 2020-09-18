const initialState = {
  list: [],
  error: null,
  fetching: false,
}

const GET_MOVIES = 'GET_MOVIES'
const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS'
const GET_MOVIES_ERROR = 'GET_MOVIES_ERROR'

export default (state=initialState, action) => {
  switch(action.type) {
    case GET_MOVIES:
      return { ...state, fetching: true }
    case GET_MOVIES_SUCCESS:
      return { ...state, list: action.payload, fetching: false }
    case GET_MOVIES_ERROR:
      return { ...state, error: action.payload, fetching: false }
    default:
      return state
  }
}

const getMovies = () => ({ type: GET_MOVIES })
const getMoviesError = (payload) => ({ type: GET_MOVIES_ERROR, payload })

export const getMoviesAction = () => (dispatch, getState) => {
  dispatch(getMovies())
  fetch('https://react-course-api.azulschool.net/movies', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    dispatch({
      type: GET_MOVIES_SUCCESS,
      payload: data
    })
  })
  .catch(err => {
    console.log(err)
    getMoviesError(err.message)
  })
}