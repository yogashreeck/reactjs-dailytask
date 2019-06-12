import React, { Component } from 'react';
import './add.css';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      add: 10,
      sub : 10,
      multi : 10,
      show: true
    };
  }

  AdditionOpt = () => {
    this.setState({ add: this.state.add + 5 });
  }

 SubstractionOpt = () => {
  if (this.state.sub > 0) {
    this.setState({ sub: this.state.sub - 5 });
  }
  }

  MultiOpt = () => {
    this.setState({multi: this.state.multi * 5 });
  }

  render() {
    return (
      <div className="disply">
        <div className="add">
        <h2>{ this.state.add }</h2>
        <button onClick={this.AdditionOpt }>Addition</button>
        </div>
         <div className="sub">
        <h2>{ this.state.sub }</h2>
        <button onClick={this.SubstractionOpt }>Substraction</button>
        </div>
        <div className="multi">
        <h2>{ this.state.multi }</h2>
        <button onClick={this.MultiOpt }>Multiplication</button>
        </div>
      </div>
    );
  }
}







export default Add;