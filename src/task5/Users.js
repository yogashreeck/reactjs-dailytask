import React, { Component } from 'react';
import Contacts from './Contacts';
import './user.css';

class Users extends Component {
  render() {
    return (
      <Contacts hello={this.state.hello} tsk={this.state.tsk}/>
    )
  }
  state = {
    hello: ' ',
    tsk : ' '
  }

    componentDidMount() {
      fetch('https://api.github.com/users/KrunalLathiya')
      .then(res => res.json())
      .then((data) => {
        this.setState({ hello: data })
      })
      .catch(console.log)
  
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res1 => res1.json())
    .then((data1) => {
      this.setState({ tsk: data1 })
    })
    .catch(console.log)
    
}
}

export default Users;