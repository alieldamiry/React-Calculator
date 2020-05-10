import React, { Component } from 'react';
import './App.css';
import Output from './Components/Output';
import Btn from './Components/Btn';
import CalculateBtn from './Components/CalculateBtn';
import ClearBtn from './Components/ClearBtn';
import DeleteBtn from './Components/DeleteBtn'

class App extends Component {
  state = {
    output: '0',
    flag: false
  }


  toggleBtn = (event) => {
    let flag = this.state.flag;
    let output = this.state.output;
    const operations = ['+', '-', '*', '/'];

    if (operations.includes(event.target.innerHTML)) {
      flag = true;
    }
    if (output[0] == 0 || flag === false) {
      flag = true;
      output = '';
    }
    output = output + event.target.innerHTML;
    this.setState({ output: output, flag: flag });
  }

  clear = () => {
    this.setState({ output: '' })
  }

  delete = () => {
    let output = this.state.output;
    this.setState({ output: output.substring(0, output.length - 1) });
  }

  calculate = () => {
    let output = this.state.output;
    const operations = ['+', '-', '*', '/'];
    if (operations.includes(output[output.length - 1])) {
      output = output.slice(0, -1);
    }


    let calculatedOutput = eval(output).toString();
    this.setState({ output: calculatedOutput, flag: false });
  }

  render() {
    let btnsValues = ['/', '1', '2', '3', '*', '4', '5', '6', '+', '7', '8', '9', '-', '.', '0'];

    let buttons = btnsValues.map((value) => {
     return <Btn key={value} click={(event) => this.toggleBtn(event)}>{value}</Btn>
    }
    );

    return (
      <div className="App">
        <div className="Calculator">
          <Output>{this.state.output}</Output>
          <ClearBtn click={this.clear}>AC</ClearBtn>
          <DeleteBtn click={this.delete}>DEL</DeleteBtn>
          {buttons}
          <CalculateBtn calculate={this.calculate}>=</CalculateBtn>
        </div>
      </div>
    );
  }
}

export default App;
