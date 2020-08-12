import React, { Component } from 'react';

const NiceImg = ({src, onClick}) => {
    return ( 
        <img onClick={onClick} style={{
            borderRadius:"50%"
        }} width="100" src={src} />
     );
}
 
export default NiceImg;