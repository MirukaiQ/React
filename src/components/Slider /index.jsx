import React, { Component } from 'react';
import './styles/style.css'


class Slider extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {data} = this.props
        return (
            <div className="slideContainer">
               <img 
               src={data.link}
               className="firstSlide"
               />
            </div>
        );
    }
}

export default Slider;
