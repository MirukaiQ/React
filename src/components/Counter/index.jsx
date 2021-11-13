import React, { Component } from "react";

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      click: 1,
    };
  }
  extendValue = () => {
    return this.setState((state, props) => {
      return { counter: state.counter + props.step };
    });
  };
  decreaseValue = () => {
    return this.setState((state, props) => {
      return { counter: state.counter - props.step };
    });
  };
  tickValues = () => {
      return this.setState((state) => {
          return {counter: state.counter + state.click}
      })
  }
  autoClick = () => {
      return setInterval(this.tickValues, 1000)
  }
  clickChanger = (e) => {
      const value = parseInt(e.target.value)
      return this.setState(() => {
          return {click: value}
        }) 
    }
    componentDidMount() {
        setInterval(this.tickValues, 1000)
        setTimeout(() => {clearInterval(this.autoClick)}, 5000)
    }
  render() {
    const { counter, click } = this.state;
    const { step } = this.props;

    return (
      <>
        <div>
          <p>Value:{counter}</p>
          <button onClick={this.extendValue}>extend</button>
          <button onClick={this.decreaseValue}>decrease</button>
          <button onClick={this.autoClick}>autoclick</button>
          <input type="number" value={click} onChange={this.clickChanger} />
          <p>the value is change by {step} steps</p>
        </div>
      </>
    );
  }
}

export default index;
