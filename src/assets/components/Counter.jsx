import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  counterClick = () => {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <h3>Contatore: {this.state.count}</h3>
        <button onClick={this.counterClick}>Incrementa</button>
      </div>
    );
  }
}
export default Counter;
