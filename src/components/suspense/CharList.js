import React from 'react'
import suspensify from './suspensify'

const chars = suspensify(fetch('https://rickandmortyapi.com/api/character/').then(r=>r.json()))

const CharList = () => {
    const squareLength = 30;
    const listChars = chars.read().results.map((char) =>
        <div key={char.id.toString()}>
            <img style={{maxWidth: squareLength+'px', maxHeight: squareLength+'px'}} src={char.image} alt={char.name} />{char.name}
        </div>
    );

    return (
        <div>
            <div>{listChars}</div>
        </div>
      );
}
 
export default CharList;