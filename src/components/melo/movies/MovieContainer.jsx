import React, { useReducer } from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMoviesAction } from '../../../redux/moviesDuck'

const MovieContainer = (props) => {
    const movies = useSelector((state) => state.movies.list)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMoviesAction())
    }, [dispatch])
    return (
        <>
        {movies.map(movie => (
            <h1>{movie.title}</h1>
        ))}
        </>
    )
}

export default MovieContainer