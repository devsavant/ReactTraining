import React, { Component } from 'react';

class SimpleForm extends Component {

    state = { 
        email:"",
        pass:""
    }

    // imperativas ===>> Vanilla -- jQuery
    //     VS
    // declarativas ===> state<true>=UI state<false>=IU

    onChange = (event) => {
        let {value, name} = event.target
        this.setState({[name]:value}, ()=>{ 
           console.log(this.state) 
        }) // callback una vez que se actualiza el estado
    }

    render() { 
        return ( 
            <div>
                <h2>
                    {JSON.stringify(this.state)}
                </h2>
                <input name="email" onChange={this.onChange} placeholder="email" />
                <input name="pass"  onChange={this.onChange}  placeholder="pass" />
            </div>
         );
    }
}
 
export default SimpleForm;