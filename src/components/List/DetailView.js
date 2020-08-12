import React from 'react'

export default ({name, image, children})=>{
    return (
        <div style={{
            display:"flex",
            flexDirection:"column",
            boxShadow:"3px 3px 5px 2px #ccc",
            margin:10,
            padding:15,
            alignItems:"center"
        }}>
            <p> {name} </p>
            {children}
        </div>
    )
}