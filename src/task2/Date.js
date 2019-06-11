import React, { Component } from 'react';
import Dates from './Dates';


class Date extends Component {
  render() {
    return (
      <div>
       <h1>{this.props.title}Names with Birth Date</h1>
        <Date date="1995">jhon</Date>
        <Date  date="1990">ram</Date>
        <Date date="1985">sam</Date>
      </div>
    );
  }
}

export default Date;