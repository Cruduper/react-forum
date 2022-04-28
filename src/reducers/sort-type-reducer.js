export default (state = 'vote', action) => {
  switch (action.type) {
    case 'SWITCH_VOTE':
      return 'vote';
    case 'SWITCH_DATE':
      return 'date';
    default:
      return state;
  }
};