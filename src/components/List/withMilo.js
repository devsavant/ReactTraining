import React, { useState } from 'react'
export default function withMortys(WrappedComponent){
    return  (...props) => {
        const [chars,setChars] =useState ([])
       const retrieveCharacters = fetch("https://rickandmortyapi.com/graphql", {
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(
                    {"query":"{characters\n{results{\nid\n name\n image\n species}}}"}
                )
            })
        retrieveCharacters
        .then(r=>r.json())
        .then(response=>{
            setChars(response.data.characters.results)
        })
        return (
            <WrappedComponent chars={chars} {...props}/>
        )
    }
}