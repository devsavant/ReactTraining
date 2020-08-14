import React from 'react';
import PropTypes from 'prop-types'

const MatchingProps = ({name, email, age, onClick}) => {
    return (  
        <div>
            <h2>{name} - Bliss</h2>
        </div>
    );
}

MatchingProps.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    onClick: PropTypes.func,
    active: PropTypes.bool,
    desc: PropTypes.symbol,
    node: PropTypes.node,
    element: PropTypes.element,
    // instance: PropTypes.instanceOf()
    enum: PropTypes.oneOf(["ADMIN", "GUEST"]),
    ofType: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool
    ]),
    custom: (props, propName, componentName)=>{
        if(!/https?:\/\/[\w]+.[\w]+/.test(props[propName])){
            return new Error(`Invalid prop ${propName} supplied to ${componentName}`)
        }
    },
    // shape, exact, ObjectOf
}

export default MatchingProps;