import React, { Component } from 'react';

class index extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            counter:0,
            isIncreacing: true
        }
    }
    extendValue = () => {
        return this.setState((state, props) => {
            return {counter: state.counter + props.step}
        })
    }
    decreaseValue = () => {
        return this.setState((state, props) => {
            return {counter: state.counter - props.step}
        })
    }
    render() {
        const {counter} = this.state
        const {step} = this.props
        
        return ( <>
            <div>
                <p>Value:{counter}</p>
                <button onClick={this.extendValue}>extend</button>
                <button onClick={this.decreaseValue}>decrease</button>         
                <p>the value is change by {step} steps</p>
            </div> 
       </> );
    }
}

export default index;
