import React, { useEffect } from 'react'
import CharDisplay from './CharDisplay'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getCharsAction } from '../../redux/charsDuck'

const CharsContainer = () => {
    const history = useHistory()
    const [chars, fetching] = useSelector(state=>[state.chars.array, state.chars.fetching])
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCharsAction())
    },[])

    const renderChar = (char, index) => {
        return <CharDisplay key={index} id={index} />
    }

    const renderChars = () => {
        return chars.map(renderChar)
    }

    return ( 
        <div>
            <h2 onClick={()=>history.goBack()} >Volver</h2>
            { !fetching ? renderChars() : <img src="https://flevix.com/wp-content/uploads/2020/01/Preloader.gif" /> }
        </div>
     );
}

export default CharsContainer
