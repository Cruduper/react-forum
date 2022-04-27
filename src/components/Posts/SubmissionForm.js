import React from 'react';
import {v4} from 'uuid';
import PropTypes from "prop-types";
// import { MDBBtn } from 'mdb-react-ui-kit';

// const {username, postText, postDateTime, score, id} = action;
function SubmissionForm(props) {
  
  function handleAddingNewPostToList(event) {
    event.preventDefault();
    props.handleAddingNewPostToList({username: event.target.username.value, postText: event.target.postText.value, postDateTime: Date(), score: 0, id: v4()})
  }

  function handleCancelingSubmit(){
    props.handleFormToggle();
  }
  
  return (
    <div className="p-5">
    <form className="px-5" onSubmit={handleAddingNewPostToList}>
      <div className="form-outline mb-4">
        <input type="text" id="username" name="username" className="form-control border" />
        <label className="form-label" htmlFor="form4Example1">User Name</label>
      </div>

      <div className="form-outline mb-4">
        <textarea className="form-control border" id="postText" name="postText" rows="4"></textarea>
        <label className="form-label" htmlFor="form4Example3">Message</label>
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button type="submit" className="btn btn-primary mb-4">Post</button>
        <button onClick={handleCancelingSubmit} type="button" className="btn btn-outline-dark border ms-3 mb-4">Cancel</button>
      </div>
    </form>
    </div>
  )
}

SubmissionForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default SubmissionForm;