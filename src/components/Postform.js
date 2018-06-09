import React, { Component } from 'react';
import { connect } from 'react-redux';
/* import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions'; */
import { Header } from '../header/Header'
import PropTypes from 'prop-types';
import { createPost } from '../actions/recipes';

class Postform extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: ''
    };
  }

  onChange(e){
    this.setState(
    {
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e){
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.createPost(post);
  }

  render() {
    return (
      <div>
        {Header()}
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div>
            <label>Title: </label>
            <br />
            <input type="text" onChange={this.onChange.bind(this)} name="title" value={this.state.title}/>
          </div>
          <br />
          <div>
            <label>Body: </label>
            <br />
            <textarea name="body" onChange={this.onChange.bind(this)} value={this.state.body} />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

Postform.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(Postform);