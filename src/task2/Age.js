import React, { Component } from 'react';
import Ages from './Ages';
import Cities from './Cities';
import BirthDate from './BirthDate';
import '../App.css';


class Age extends Component {
  render() {
    return (
      <div className="App-names">
        <h1>{this.props.title}Names with Age</h1>
        <Ages age="20">jhon</Ages>
        <Ages age="40">ram</Ages>
        <Ages age="50">sam</Ages>

        <Cities />
        <BirthDate />
      </div>
    );
  }
}

export default Age;