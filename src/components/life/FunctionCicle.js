import React, { useState, useEffect } from 'react';

const FunctionCicle = () => {
    const [time, setTime] = useState(0) 

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(sec=>sec+1) // manera extra de usar setState (hooks)
            console.log(time)
        }, 1000)
        return ()=>clearInterval(interval) // hibrido entre didUpdate y willUnmount
    },[])


    return ( 
        <h2>{time}</h2>
     );
}
 
export default FunctionCicle;