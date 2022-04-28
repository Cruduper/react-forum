export default (state = {}, action) => {
  const {username, postText, postDateTime, score, id} = action;
  switch(action.type) {
    case 'ADD_POST': 
      return Object.assign({}, state, {
        [id]: {
          username: username,
          postText: postText,
          postDateTime: postDateTime,
          score: score,
          id: id
        }
      });
    case 'VOTE':
      const newPost = Object.assign({}, state[id], {score});
      const updatedState = Object.assign({}, state, {
        [id]: newPost
      });
      return updatedState;
    default: 
      return state;
  }
};




// case c.UPDATE_TIME:
//     const newTicket = Object.assign({}, state[id], {formattedWaitTime});
//     const updatedState = Object.assign({}, state, {
//       [id]: newTicket
//     });
//     return updatedState;
//   default:
//     return state;
//   }