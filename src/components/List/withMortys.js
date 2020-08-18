import React, {Component} from 'react'

export default function withMortys(WrappedComponent){
    return class extends Component{ // como seria un HOC de tipo función

        state = {
            chars:[]
        }

        onClick = (name) => {
            console.log("lo puchaste!", name)
        }

        componentDidMount(){
            fetch("https://rickandmortyapi.com/graphql", {
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(
                    {"query":"{characters\n{results{\nid\n name\n image\n species}}}"}
                )
            })
            .then(r=>r.json())
            .then(response=>{
                // VIrtual dom ==> detona el render !!
                this.setState({chars:response.data.characters?.results})
            })
        }

        render(){
            return (
                <WrappedComponent onClick={this.onClick} chars={this.state.chars} {...this.props} />
            )
        }
    }
}