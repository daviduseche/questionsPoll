import React from 'react';
import { connect } from 'react-redux';
import { getResults } from '../actions';

class Results extends React.Component {
  componentDidMount() {
    this.props.getResults();
  }

  renderResults = () => {
    const results = this.props.results;
    let submissions = results.map((idx, index) => {
      return (
        <div
          style={{
            borderBottom: '1px solid #0000ff',
            margin: '24px',
            padding: '12px',
            width: '75%'
          }}
        >
          <li key={index}>
            <div>Question number: ({idx.questionid})</div>
            <div>Question: {idx.question}</div>
            <div>Answer: {idx.answer}</div>
          </li>
        </div>
      );
    });

    return submissions;
  };

  render() {
    return (
      <div>
        <ul style={{ listStyleType: 'none' }}>{this.renderResults()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { results: state.results };
};

export default connect(
  mapStateToProps,
  { getResults }
)(Results);
