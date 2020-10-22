import React from 'react'
import suspensify from './suspensify'

const url = 'https://rickandmortyapi.com/api/character'
const allCharacters = suspensify(
  fetch(url).then(response => response.json())
)

const CharList = () => {
  const characters = allCharacters.read().results
    return (
        <>
        <h2>Personajes de Rick & Morty</h2>
        {characters.map(char =>
          <p key={char.id}>{char.name}</p>
        )}
        </>
      );
}

export default CharList;