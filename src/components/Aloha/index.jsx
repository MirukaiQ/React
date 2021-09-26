import { Component } from 'react';

class Aloha extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isGreeting: true,
    };
  }

  switchState = () => {
    this.setState({
      isGreeting: !this.state.isGreeting,
    });
  };

  render() {
    const {
      user: { id, name, surName, isSelected },
      selectUser
    } = this.props;

    const fullName = `${name} ${surName}`.trim();

    const { isGreeting } = this.state;

    const styles = {
      color: isSelected ? 'green' : 'black',
      border: isSelected ? '2px solid black' : '2px solid transparent',
    };

    return (
      <section style={styles}>
        <h1>
          {isGreeting ? 'Привет' : 'Пока'} {fullName}
        </h1>
        {isGreeting ? (
          <button onClick={this.switchState}>Сменить</button>
        ) : null}
        <button onClick={() => selectUser(id)}>Выбрать</button>
      </section>
    );
  }
}

export default Aloha;
