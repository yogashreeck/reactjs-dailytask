import React, { Component } from 'react';
import Dates from './Dates';


class BirthDate extends Component {
  render() {
    return (
      <div>
       <h1>{this.props.title}Names with Birth Date</h1>
        <Dates date="1995">jhon</Dates>
        <Dates  date="1990">ram</Dates>
        <Dates date="1985">sam</Dates>
      </div>
    );
  }
}

export default BirthDate;