import React, { Component } from 'react';

class Cicle extends Component {
    state = { 
        time: 0,
        hasError: false,
        messages: ["Hola", "bb", "que", "mas", "pues?", "si", "o que?"]
     }

     // NUNCA METAS LOS PROPS AL STATE

    // interval
    input = React.createRef() // useRef()

    componentDidMount(){
        this.interval = setInterval(()=>{
            this.setState(({time})=>({time:time+1}))
            console.log(this.state.time)
        },1000)

        // this.setState({name:this.props.name}) // <---
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    // getSnapshotBeforeUpdate(prevProps, prevState){ // no effects  ==>> antes de la actualización
    //     if(prevState.messages.length<this.state.messages.length){
    //         return true
    //     }
    // }

    // componentDidUpdate(prevProps, prevState, snapshot){ // effects ==>> despues de la actualización
    //     if(snapshot){ // cambiaron los mensajes ?
    //         console.log("happening?")
    //         this.div.scrollTop = this.div.scrollHeight // sideEffect
    //     }
    // }

    static getDerivedStateFromError(error){ // algo muy importante: detecta errores de los hijos (production)
        console.log("si? ", error)
        return {hasError:true} // setState kindof
    } // únicamente actualizar el state

    componentDidCatch(error, info){ // Sentry - Loggly - aquí van
        console.log("valió", info.componentStack)
    }

    renderMessages = () => {
        return this.state.messages.map(m=><Message m={m} />)
    }

    onKeyPress = (e) => {
        if(e.key!=="Enter") return
        let newWord = this.input.current.value // 1.- Esto es una manera extra de controlar un input
        this.setState(prevState=>({...prevState, messages:[...prevState.messages, newWord]}),
        ()=>{
            this.input.current.value = "" // 2.- controlar input
           // this.input // React way Manipulación del DOM (nodos)
            this.div.scrollTop = this.div.scrollHeight
        })
        
    }

    render() { 
        if(this.state.hasError) return (<h1>Todo se fué a la jodida</h1>) // UX
        return ( 
            <div>
                {/* <h1>{this.props.name}</h1> */}
                <h2>{this.state.time}</h2>
                <div ref={div=>this.div=div} style={{width:400,maxHeight:200, overflow:"scroll", border:"1px solid"}}>
                    {this.renderMessages()} 
                </div>
                <br/>
                <input ref={this.input} onKeyPress={this.onKeyPress} type="text" />
            </div>
         );
    }
}
 
export default Cicle;

function Message ({m}) {
    return <p key={m}>{m.toFix()}</p>
}