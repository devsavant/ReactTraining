import React, { Fragment } from 'react'
import DetailView from './DetailView'
import NiceImg from './NiceImg'


export default ({chars=[], onClick})=>{

    function renderChars(){
        return chars.map(char=>{
            return <DetailView key={char.id} {...char} >
                <NiceImg src={char.image} />
              </DetailView>
        })
    }

    return (
        <div onClick={onClick}>
            <h1>Los mortys:</h1>
            <div  style={{
                display:"flex",
                flexWrap:"wrap"
            }}> 

            {renderChars()} 
            </div>
        </div>
        
    )
}