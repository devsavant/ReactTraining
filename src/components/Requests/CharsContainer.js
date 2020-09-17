import React, { useEffect } from 'react'
import CharDisplay from './CharDisplay'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCharsAction } from '../../redux/charsDuck'

const CharsContainer = ({chars, fetching, getCharsAction}) => {
    const history = useHistory()

    useEffect(()=>{
        getCharsAction()
    },[])

    const renderChar = (char, index) => {
        return <CharDisplay key={index} {...char} char={char} />
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

function mapState({chars:{array, fetching}}){
    return {
        chars: array,
        fetching
    }
}
 
export default connect(mapState, {getCharsAction})(CharsContainer)