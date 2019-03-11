import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { questions } from '../actions';

class Admin extends React.Component {
  renderError({ error, touched, submitFailed }) {
    if (submitFailed && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.submitFailed ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <textarea {...input} placeholder="Content" rows="3" cols="20" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    window.alert('thank you for submitting your question');
    this.props.questions(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="questions"
          component={this.renderInput}
          label="Enter Question"
        />
        <Field
          name="choices"
          component={this.renderInput}
          label="Enter Choices"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.questions) {
    errors.questions = 'You must enter questions';
  }
  if (!formValues.choices) {
    errors.choices = 'You must enter choices';
  }
  return errors;
};

const afterSubmit = (result, dispatch) => dispatch(reset('admin'));

const formWrapped = reduxForm({
  form: 'admin',
  validate,
  onSubmitSuccess: afterSubmit
})(Admin);

export default connect(
  null,
  { questions }
)(formWrapped);
