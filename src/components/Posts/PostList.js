import React from 'react';
import Post from './Post';
function PostList(props) {
  return (
    <div>
      {Object.values(props.mainPostList).map((post)=>
        <Post 
          username={post.username}
          postText={post.postText}
          postDateTime={post.postDateTime}
          score={post.score}
          id={post.id}
          key={post.id}
        />
      )}
    </div>
  )
}

export default PostList;


