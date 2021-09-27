import React from 'react';
import { Component } from 'react';
import Slider from './components/Slider ';
import "./sliderButton.css"

const data = [
  { link: "https://cdn.profile.ru/wp-content/uploads/2021/04/chashka-kofe-zerna-lopatka.jpg" },
  { link: "https://cdn.profile.ru/wp-content/uploads/2021/08/Kofe-zerna-korica.jpg" },
  { link: "https://cdn.profile.ru/wp-content/uploads/2021/06/kofe-zerna-kofemolka-chashka.jpg" },
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      interval: 1500,
      intervalId: null
    }
  }
  slide = () => {
    return this.setState((state) => {
      return {index: (state.index + 1) % data.length}
    })
  }
  slideShow = () => {
    return this.setState((state) => {
      if (!this.intervalId) {
         this.intervalId = setInterval((this.slide), state.interval)
      }
    })
  }
  slideStop = () => {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId)
      this.intervalId = null
    }
  }
  slideSpeed = (e) => {
    return this.setState(() => {
      return {interval: e.target.value}
    })
  }
  render() {
    const { index, interval } = this.state
    return <>
      <div className="slider">
        <Slider data={data[index]} />
        <button className="sliderButton" onClick={this.slide} />
        <button className="sliderButton" onClick={this.slideShow} />
        <input type="number" value={(interval)} onChange={this.slideSpeed}/>
        <button onClick={this.slideStop}>stop</button>
      </div>
    </>
  }
}

export default App;
