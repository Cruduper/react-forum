import React from 'react';
import PostList from './PostList'
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

  handleUpvotePost = (id, score) => {
    const {dispatch} = this.props;
    const action = {
      type: 'VOTE',
      id: id,
      score: score + 1,
    }
    dispatch(action);
  }

  handleDownvotePost = (id, score) => {
    const {dispatch} = this.props;
    const action = {
      type: 'VOTE',
      id: id,
      score: score - 1,
    }
    dispatch(action);
  }
  
  handleSortTypeChange = (event) => {
    // console.log("event = ", event);
    // if(event !== undefined){

    // return event.target.value;
    // } 
    // else
    // {
    //   return 'vote';
    // }
    
    if (event === undefined) {
      const {dispatch} = this.props;
      const action = { type: 'SWITCH_VOTE' }
      dispatch(action);
    } else if (event.target.value === 'date') {
        const {dispatch} = this.props;
        const action = { type: 'SWITCH_DATE' }
        dispatch(action);
    } else if (event.target.value === 'vote') {
      const {dispatch} = this.props;
      const action = { type: 'SWITCH_VOTE' }
      dispatch(action);
    }    
  }
  
  render() {
    let visibleText;
    if (this.props.formVisibleOnPage) {
      visibleText = <SubmissionForm handleAddingNewPostToList={this.handleAddingNewPostToList} handleFormToggle={this.handleFormToggle}/>
    } else {
      visibleText = <div>
        <label htmlFor="sortType">Sort Type</label>
        <select className="form-control w-25 mb-3" defaultValue={this.props.sortType} onChange={this.handleSortTypeChange} name="sortType" id="sortTypeSelect">
          <option value='vote'>Votes</option>
          <option value='date'>Newest Post</option>
        </select>
        <PostList 
          mainPostList={this.props.mainPostList}
          sortType={this.props.sortType}
          handleUpvotePost={this.handleUpvotePost}
          handleDownvotePost={this.handleDownvotePost}
        />
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
  sortType: PropTypes.string,
  formVisibleOnPage: PropTypes.bool
}

const mapStateToProps = (state) => {  
  return  {
    mainPostList: state.mainPostList,
    formVisibleOnPage: state.formVisibleOnPage,
    sortType: state.sortType
  }
}
PostsContainer = connect(mapStateToProps)(PostsContainer);

export default PostsContainer;