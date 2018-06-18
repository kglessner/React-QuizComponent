import React, { Component } from "react";
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {

  handleClick(buttonText) {
    if (this.props.quiz_question.answer === buttonText) {
      this.props.showNextQuestionHandler();
    }
  }

  render() {

    const answers = this.props.quiz_question.answer_options.map((value, index) => 
      <QuizQuestionButton clickHandler={(button_text) => this.handleClick(button_text)} key={index} button_text={value}/>
    );

    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">          
          <ul>
            {answers}
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;
