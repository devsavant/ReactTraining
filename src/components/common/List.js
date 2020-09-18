import React, { useState } from 'react';

const array = [
    {
        title:"Mango",
        id:1,
        rate:5
    },
    {
        title: "Granadilla",
        id:2,
        rate:4
    },
    {
        title: "Chontaduro",
        id:3,
        rate:1
    },
    {
        title: "Borojo",
        id:4,
        rate:2
    }
]

// const obj = {
//     1:{
//         title:"Mango",
//         id:1,
//         rate:5
//     },
//     2:{
//         title:"Granadilla",
//         id:2,
//         rate:4
//     }
// }

const List = () => {
    const [fruits, setFruits] = useState(normlizeData(array))

    console.log(fruits)

    function normlizeData(array) {
        return array.reduce((acumulador, valor) => {
            return {
              ...acumulador,
              [valor.id]: {...valor}
            }
          }, {})
    }

    // const Item = (props) => {
    //     if(props.fruit.rate > 1){
    //         return (
    //             <p onClick={()=>deleteItem(props.fruit.id)} key={props.index}>
    //                 {props.fruit.title}
    //             </p>
    //         )
    //     }else{
    //         return null
    //     }
        
    // }

    // const Item = (props) => {
    //     return (
    //         <>
    //             {props.fruit.rate > 1 ? <p onClick={()=>deleteItem(props.fruit.id)} key={props.index}>
    //                 {props.fruit.title}
    //             </p> : null }
    //         </>

    //     )  
    // }


    const Item = (props) => {
        return (
            <>
                {props.fruit.rate > 1 && <p onClick={()=>deleteItem(props.fruit.id)} key={props.index}>
                    {props.fruit.title}
                </p>}
            </>

        )  
    }

    const renderItem = (fruit, index) => {
        return (<Item index={index} fruit={fruit} />)
    }

    const renderList = () => {
        // return fruits.map(renderItem)
        return Object.keys(fruits).map((key)=>renderItem(fruits[key], key))
    }

    const deleteItem = (id) => {
        // setFruits([...fruits.filter(fruit=>fruit.id !== id)])
        delete fruits[id]
        setFruits({...fruits})
    }

    return ( 
        <div>
            {renderList()}
        </div>
     );
}
 
export default List;