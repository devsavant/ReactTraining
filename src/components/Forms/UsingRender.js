import React, { Component } from 'react';
import PropTypes from 'prop-types'

const UsingRender = ({render}) => {
    return ( 
        <div>
            {render()}
        </div>
     );
}

UsingRender.propTypes = {
    render:PropTypes.func,
    url: (props, propsName, componentName)=>{
        if(!/https?:\/\/[\w]+.[\w]+/.test(props[propsName])){
            return new Error(`Invalid prop ${propsName} supplied to ${componentName}`)
        }
    }
}
 
export default UsingRender;