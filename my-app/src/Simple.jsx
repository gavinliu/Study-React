import React, {Component} from 'react';

export class Simple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: props.initValue || 0
    }
  }

  handleClick() {
    let num = this.state.age + 1;
    this.setState({age: num});
  }

  render() {
    return (
      <div>
        {this.state.age}
        <br/>
        <button onClick={() => this.handleClick()}>xx</button>
      </div>
    )
  }
}

export default Simple;