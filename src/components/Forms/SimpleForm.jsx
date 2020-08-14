import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class SimpleForm extends Component {
  state = {
    email: "",
  }

    // imperativas vs declarativas
    // imperativas -> Vanilla -- jQuery
    // declarativas -> UI -> bool=true

    onChange = (event) => {
        let { value, name } = event.target
        this.setState({ [name]: value }, () => {
        })
    }

  render() {
    return (
      <div>
        <h2>
            {JSON.stringify(this.state)}
        </h2>
        <input
            onChange={this.onChange}
            type="text"
            placeholder="email"
            name="email"
        />
        <input
            onChange={this.onChange}
            type="text"
            placeholder="pass"
            name="pass" />
        <Link to='/login/new'>Rutita</Link>
        <Route path='/login/new' render={() => <h3>Ulala!</h3>} />
      </div>
    )
  }
}

export default SimpleForm