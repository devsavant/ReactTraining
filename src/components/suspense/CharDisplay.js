import React from 'react'
import suspensify from './suspensify'

const rick = suspensify(fetch('https://rickandmortyapi.com/api/character').then(r=>r.json()))


const CharDisplay = () => {

    function getElements(){
        return rick.read().results.map(char => returnElement(char))
    }

    function returnElement(char){
        return <span key={char.id}><img src={char.image} alt={char.image} width={100} height={100}/><p>{char.name}</p></span>
    }

    return ( 
        <div>
            <div style={{display: "flex", flexDirection: "row", width: "80%"}}>{getElements()}</div>
        </div>
     );
}

export default CharDisplay