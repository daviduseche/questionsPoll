export default (state = [], action) => {
  switch (action.type) {
    case 'POLL_QUESTIONS':
      console.log(action.payload);
      return action.payload; //redux-form takes care of immutable state so no need to use ... here

    default:
      return state;
  }
};
