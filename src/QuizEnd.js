import React, { Component } from "react";

class QuizEnd extends Component {

  handleClick() {
    this.props.resetClickHandler();
  }
  
  render() {
    return (
        <div>
        <p>Thanks for playing!</p>
        <a onClick={this.handleClick.bind(this)}>Reset Quiz</a>
      </div>
    );
  }
}

export default QuizEnd;
