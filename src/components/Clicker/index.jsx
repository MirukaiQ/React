/* 
  Создайте компонент Clicker
  у него в состоянии должен быть счетчик количества кликов по нему
  Компонент должен выводить на экран количестов кликов 
  и кнопку, по нажатию на которую счетчик растет

*/

import  { Component } from 'react';
import Image from './../Image';
import './clicker.css';

class Clicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clickAmount: 0,
    };
  }

  handleClick = () => {
    const { clickAmount } = this.state;

    this.setState({
      clickAmount: clickAmount + 1,
    });
  };

  render() {
    const { clickAmount } = this.state;

    const button = (
      <button className="btn" onClick={this.handleClick}>
        жми
      </button>
    );
    const img = (
      <Image src="http://localhost:3000/favicon.ico" alt="favvicon" />
    );

    return (
      <>
        <div>
          <Image />
          <p className="clickerText">Нажали {clickAmount} раз</p>
          {clickAmount < 10 ? button : img}
        </div>
        <section></section>
      </>
    );
  }
}

export default Clicker;
