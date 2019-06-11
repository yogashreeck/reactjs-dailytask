import React, { Component } from 'react';
import City from './City';


class Cities extends Component {
  render() {
    return (
      <div>
       <h1>{this.props.title}Names with city</h1>
        <City city="mandya">jhon</City>
        <City city="mysore">ram</City>
        <City city="maddur">sam</City>
      </div>
    );
  }
}

export default Cities;