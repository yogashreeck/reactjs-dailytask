import React, { Component } from 'react';
import Contacts from './Contacts';

class Api extends Component {
  render() {
    return (
      <Contacts hello={this.state.hello} />
    )
  }
  state = {
    hello:" "
  }

    componentDidMount() {
      fetch('https://api.github.com/users/KrunalLathiya')
      .then(res => res.json())
      .then((data) => {
        this.setState({ hello: data })
      })
      .catch(console.log)
    
  }
}

export default Api;