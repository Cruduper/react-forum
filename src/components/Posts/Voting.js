import React from 'react';

export default function Voting(props) {
  return(
    <div>
      <p>{props.score} upvotes</p>
      <i className="fas fa-arrow-alt-circle-up fs-3" onClick={() => props.handleUpvotePost(props.id, props.score)}></i>
      <i className="fas fa-arrow-alt-circle-down fs-3 ms-3" onClick={() => props.handleDownvotePost(props.id, props.score)}></i>
    </div>
  )
}
