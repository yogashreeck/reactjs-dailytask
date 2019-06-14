import React, { Component } from 'react';
import Userid from './Userid';

class Users extends Component {
    render() {
        return (
          <Contacts hello={this.state.hello} />
        )
      }
      state = {
        hello:" "
      }
    
        componentDidMount() {
          fetch('https://jsonplaceholder.typicode.com/posts/1')
          .then(res => res.json())
          .then(json => console.log(json))
          .then((data) => {
            this.setState({ hello: data })
          })
          .catch(console.log)
        
      }
    }

export default Users;