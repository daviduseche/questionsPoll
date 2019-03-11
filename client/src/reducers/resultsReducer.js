export default (state = [], action) => {
  switch (action.type) {
    case 'QUESTION_RESULTS':
      return action.payload.length > 1
        ? action.payload[action.payload.length - 1]
        : state; //only show last submission

    default:
      return state;
  }
};
