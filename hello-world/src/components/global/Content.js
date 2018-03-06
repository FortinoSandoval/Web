import React, { Component } from 'react';
import './css/Content.css';

class Content extends Component {
	constructor() {
		super();
    this.state = {
      count: 0
    };
    this.handleCountClick = this.handleCountClick.bind(this);
    this.handleResultClick = this.handleResultClick.bind(this);
    this.handleInputChanged = this.handleInputChanged.bind(this);
	}
  componentDidMount(){
    this.setState({
      count: 1,
      number1: 0,
      number2: 0,
      result: 0
    });
  }
  handleCountClick(e){
    if(e.target.id==='add'){
      this.setState({
        count: this.state.count+1
      });
    }
    else if(e.target.id==='substract'){
      this.setState({
        count: this.state.count-1
      });
    }
    else{
      this.setState({
        count: 0
      });
    }
  }
  handleResultClick(e){
    this.setState({
      result: this.state.number1 + this.state.number2
    });
  }
  handleInputChanged(e)
  {
    if(e.target.id==="number1"){
      this.setState({
        number1: Number(e.target.value)
      });
    }
    else if(e.target.id==="number2"){
      this.setState({
        number2: Number(e.target.value)
      });
    }
  }

  render() {
    return (
      <div className="Content">
        <h2>Counter: {this.state.count}</h2>
        <p>
          <button id="add" onClick={this.handleCountClick}>hola</button>
          <button id="substract" onClick={this.handleCountClick}>hola</button>
          <button id="reset" onClick={this.handleCountClick}>hola</button>
        </p>

        <h2>Calculator</h2>
        <p>
          <input id="number1" type="number" onChange={this.handleInputChanged}/>
          +
          <input id="number2" type="number" onChange={this.handleInputChanged}/>
          <button id="result" onClick={this.handleResultClick}>=</button>
          {this.state.result}
        </p>
      </div>
    );
  }
}

export default Content;
