import React from 'react';
import styles, {otra} from './chars.module.css';

const CharDisplay = ({name, char}) => {
    return ( 
        <div className={styles.card} >
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