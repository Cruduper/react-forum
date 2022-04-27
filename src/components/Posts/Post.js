import React from 'react'
import UserAndTime from './UserAndTime';
import PostText from './PostText';
import Voting from './Voting';
export default function Post (props) {
  return(
    <div className="row mb-4 shadow-sm">
      <div className="col-md-3 col-sm-6 col-xs-12 border p-3">
        <UserAndTime 
        username={props.username}
        postDateTime={props.postDateTime}
        />
      </div>
      <div className="col-md-6 col-sm-6 col-xs-12 border p-3">
        <PostText postText={props.postText}/>
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12 border p-3">
        <Voting score={props.score}/>
      </div>
    </div>
  )
}


//     const {username, postText, postDateTime, score, id} = newPost;