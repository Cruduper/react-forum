import React from 'react'
import UserAndTime from './UserAndTime';
import PostText from './PostText';
import Voting from './Voting';
export default function Posts () {
  return(
    <div className="row">
      <div className="col-lg-4 col-md-3 col-sm-6 col-xs-12 border p-3">
        <UserAndTime />
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 border p-3">
        <PostText />
      </div>
      <div className="col-lg-4 col-md-3 col-sm-6 col-xs-12 border p-3">
        <Voting />
      </div>
    </div>
  )
}