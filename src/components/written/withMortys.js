import React, { Component } from 'react'

export default function withMortys(WrappedComponent){
    return class extends Component{

        state = {
            chars:[]
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
                this.setState({chars:response.data.characters?.results})
            })
        }

        render(){
            return (
                <WrappedComponent chars={this.state.chars} />
            )
        }

    }
}