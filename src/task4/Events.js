import React, { Component } from 'react';
import './eve.css';

class Events extends Component {
  constructor() {
    super();
    this.state = {

      name: "abc ",
      names : "ABCD"

    }
    this.changeName = this.changeName.bind(this);
  }
  changeName() {
    this.setState({ name1: 'xyz' });
  }
  
  handleChange(event) {
    this.setState({title: event.target.value})
  }
 


  render() {
    return (
      <div className="cont">
      <div className='eve'>
        <h2>{this.state.name1}</h2>
        <label>input field : </label>
        <input className="textbox" type="text" name="title" value={this.state.name} /><br></br>
        <button onClick={this.changeName}>button</button>
       </div>
        <div className='eve'>
        <h1>{this.state.title}</h1>
        <label>input field : </label>
        <input className="textbox" type="text" name="title" value={this.state.title} 
         onChange={this.handleChange.bind(this)} /><br></br><br></br>
       </div>
      </div>
    );
  }
}

export default Events;