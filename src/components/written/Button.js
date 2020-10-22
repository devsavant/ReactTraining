import React from 'react';

const Button = ({onClick, children}) => {
    return ( 
        <div>
            <button onClick={onClick}>
                <p className="red_text">{children}</p>
            </button>
        </div>
     );
}
 
export default Button;