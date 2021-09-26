import React from 'react';
import { Component } from 'react';
import Counter from "./components/Counter"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      step:1
    }
  }
  changeStep = (e) => {
    const value = parseInt(e.target.value)
    return this.setState(() => {
      return {step: value}
    }) 
  }
  render() {
    const {step} = this.state
    return <> 
    <Counter step={step} /> 
    <input value={step} type="number" onChange={this.changeStep}></input>
    </>
  }
}

export default App;
