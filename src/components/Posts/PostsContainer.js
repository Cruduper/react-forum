import React from 'react';
import Post from './Post'
import SubmissionForm from './SubmissionForm';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

class PostsContainer extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedPost: null,
      // editing: false
    };
  }
  handleFormToggle = () => {
    const {dispatch} = this.props;
    const action = { type: 'TOGGLE_FORM' }
    dispatch(action);
  }
  handleAddingNewPostToList = (newPost) => {
    const { dispatch } = this.props;
    const {username, postText, postDateTime, score, id} = newPost;
    const action = {
      type: 'ADD_POST',
      id: id,
      username: username,
      postText: postText,
      postDateTime: postDateTime,
      score: score,
    }
    dispatch(action);
    this.handleFormToggle();
  }


  

  render() {
    let visibleText;
    if (this.props.formVisibleOnPage) {
      visibleText = <SubmissionForm handleAddingNewPostToList={this.handleAddingNewPostToList} handleFormToggle={this.handleFormToggle}/>
    } else {
      visibleText = <div>
                      <Post />
                      <div className="text-center mt-3">
                        <button className="btn btn-primary" type="button" onClick={this.handleFormToggle}>Make new post</button>
                      </div>
                    </div>
    }
    return (
      <div className="container-fluid border shadow-sm py-4 px-4  mt-3">
        {visibleText}
        
      </div>
    )
  }
}

PostsContainer.propTyps = {
  mainPostList: PropTypes.object, 
  formVisibleOnPage: PropTypes.bool
}

const mapStateToProps = (state) => {
  return  {
    mainPostList: state.mainPostList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}
PostsContainer = connect(mapStateToProps)(PostsContainer);

export default PostsContainer;