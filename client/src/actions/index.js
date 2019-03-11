import questionsDb from '../apis/questionsDb';

export const questions = formValues => async dispatch => {
  const response = await questionsDb.post('/questionsDb', formValues);

  dispatch({ type: 'ADMIN_QUESTIONS', payload: response.data });
};

export const poll = () => async dispatch => {
  const response = await questionsDb.get('/questionsDb');

  dispatch({ type: 'POLL_QUESTIONS', payload: response.data });
};

export const results = pollResults => async dispatch => {
  const response = await questionsDb.post('/resultsDb', pollResults);

  dispatch({ type: 'RESULTS_POST', payload: response.data });
};

export const getResults = () => async dispatch => {
  const response = await questionsDb.get('/resultsDb');

  dispatch({ type: 'QUESTION_RESULTS', payload: response.data });
};
