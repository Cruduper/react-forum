import React from 'react';
import Post from './Post';
function PostList(props) {
  console.log("PostList ", props.sortType);
  let sorted;
  switch (props.sortType) {
  case ('date'): 
    sorted = Object.values(props.mainPostList).sort(function(a,b) {
      if (a.postDateTime > b.postDateTime) {
        return -1;
      }
      if (a.postDateTime < b.postDateTime) {
        return 1;
      }
      return 0;
    });
    break;
  default: 
    sorted = Object.values(props.mainPostList).sort(function(a,b) {
      return b.score - a.score; 
    });
    break;
  }
  
  console.log("sorted: " , sorted);
  return (
    <div>
      {sorted.map((post)=>
        <Post
          username={post.username}
          postText={post.postText}
          postDateTime={post.postDateTime}
          score={post.score}
          id={post.id}
          key={post.id}
          handleUpvotePost={props.handleUpvotePost}
          handleDownvotePost={props.handleDownvotePost}
        />
      )}
    </div>
  )
}

export default PostList;

var arr = [{id:1, date:'2020-12-01'}, {id:1, date:'2020-12-15'}, {id:1, date:'2020-12-12'}]