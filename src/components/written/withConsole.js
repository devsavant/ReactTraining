import React, { Component } from 'react';

function withConsole(Wrapped){
    return class extends Component {

        onClick = () => {
            console.log("lograste componer?")
        }

        render() { 
            return ( 
                <Wrapped onClick={this.onClick} {...this.props} />
             );
        }
    }
}

export default withConsole;