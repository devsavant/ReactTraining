import React, { Component } from 'react';

const NiceImg = ({src}) => {
    return ( 
        <img style={{
            borderRadius:"50%"
        }} width="100" src={src} />
     );
}
 
export default NiceImg;