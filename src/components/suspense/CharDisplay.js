import React from 'react'
import suspensify from './suspensify'

const rick = suspensify(fetch('https://rickandmortyapi.com/api/character/1').then(r=>r.json()))


const CharDisplay = () => {
    return (
        <div>
            <h2 >Personaje : {rick.read().name}</h2>
        </div>
     );
}

export default CharDisplay