<<<<<<< HEAD
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
  componentWillMount() {
=======
import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../actions";

class PostsIndex extends Component {
  componentDidMount() {
>>>>>>> upstream/master
    this.props.fetchPosts();
  }

  renderPosts() {
<<<<<<< HEAD
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={"posts/" + post.id}>
            <span className="pull-xs-right">{post.categories}</span>
            <strong>{post.title}</strong>
=======
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            {post.title}
>>>>>>> upstream/master
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
<<<<<<< HEAD
          <Link to="/posts/new" className="btn btn-primary">
=======
          <Link className="btn btn-primary" to="/posts/new">
>>>>>>> upstream/master
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
<<<<<<< HEAD
  return { posts: state.posts.all };
=======
  return { posts: state.posts };
>>>>>>> upstream/master
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
