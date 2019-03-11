import React from 'react';
import { connect } from 'react-redux';
import { poll, results } from '../actions';
import _ from 'lodash';

class Poll extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
  }
  componentDidMount() {
    this.props.poll();
  }

  onSubmit = e => {
    e.preventDefault();
    let poll = _.uniqWith(this.state.results, _.isEqual);
    this.props.results(poll);
    alert('thank you for your submission');
  };

  radioChange = e => {
    const questionid = e.target.name;
    const answer = e.target.value;
    const question = e.target.placeholder;
    const results = this.state.results;
    let result = results.map(idx => {
      if (idx.questionid === questionid) {
        idx.answer = answer;
        return idx;
      }
      return idx;
    });

    this.setState({
      results: [...this.state.results, { questionid, question, answer }]
    });
  };

  renderChoices = (choices, id, questions) => {
    let choice = choices.split(' ').map(value => {
      return (
        <label>
          {value}
          <input
            placeholder={questions}
            key={id}
            type="radio"
            value={value}
            name={id}
            onClick={this.radioChange}
          />
        </label>
      );
    });
    console.log(choice);
    return choice;
  };

  renderQuestions = () => {
    let questions = this.props.questions.map((idx, index) => {
      return (
        <div
          style={{
            border: '1px solid #F0F0F0',
            margin: '24px',
            padding: '12px',
            width: '75%',
            borderRadius: '10px'
          }}
          key={idx.id}
        >
          <span>{idx.id}.)</span>
          {idx.questions}
          <fieldset style={{ border: 'none' }} id={idx.id}>
            {this.renderChoices(idx.choices, idx.id, idx.questions)}
          </fieldset>
        </div>
      );
    });
    console.log(questions);
    return questions;
  };

  render() {
    return (
      <div>
        <h4 className="ui header">Questions</h4>
        <form onSubmit={this.onSubmit}>
          {this.renderQuestions()}
          <input className="ui button blue" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    questions: state.questions
  };
};

export default connect(
  mapStateToProps,
  { poll, results }
)(Poll);
