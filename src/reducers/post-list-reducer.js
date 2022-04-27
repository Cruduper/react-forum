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
    
    
    default: 
      return state;
  }
};
