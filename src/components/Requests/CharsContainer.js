import React, { useEffect, useState } from 'react';
import CharDisplay from './CharDisplay';

const CharsContainer = (props) => {
    const [chars, setChars] = useState([])

    useEffect(()=>{
        getChars()
    },[])

    const renderChar = (char, index) => {
        return <CharDisplay key={index} {...char} char={char} />
    }

    const renderChars = () => {
        return chars.map(renderChar)
    }

    const getChars = () => {
        fetch("https://rickandmortyapi.com/graphql", {
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(
                {"query":"{characters\n{results{\nid\n name\n image\n species}}}"}
            )
        })
        .then(r=>r.json())
        .then(response=>{
            setChars(response.data.characters?.results)
        })
    }

    return ( 
        <div>
            {renderChars()}
        </div>
     );
}
 
export default CharsContainer;