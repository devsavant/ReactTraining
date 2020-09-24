import React from 'react'
import styles, {otra} from './chars.module.css'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

const CharDisplay = ({id}) => {
    const name = useSelector(state=>{
        return state.chars.array[id].name
    })
    return ( 
        <div className={styles.card} >
             <Link to="/" >Home</Link>
            <h2 className={otra} >Personaje : {name}</h2>
        </div>
     );
}

// const styles = {
//     card:{
//         boxShadow: "1px 1px 4px 1px",
//         padding: 10    
//     },
//     text:{}
// }
 
export default CharDisplay;