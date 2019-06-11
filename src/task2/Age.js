import React, { Component } from 'react';
import Ages from './Ages';


class Age extends Component {
  render() {
    return (
      <div>
       <h1>{this.props.title}Names with Age</h1>
        <Ages age="20">jhon</Ages>
        <Ages age="40">ram</Ages>
        <Ages age="50">sam</Ages>
      </div>
    );
  }
}

export default Age;