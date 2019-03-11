import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; //rename on fly to be clear which reducer is being used
import questionsReducer from './questionsReducer';
import resultsReducer from './resultsReducer';

export default combineReducers({
  questions: questionsReducer,
  form: formReducer,
  results: resultsReducer
});
