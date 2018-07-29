<<<<<<< HEAD
import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        // early return for inital state
        if (!this.props.activeBook) {
          return <div>Select a book to get started.</div>;
        }

        return (
              <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.activeBook.title}</div>
                <div>Pages: {this.props.activeBook.pages}</div>
              </div>
        );
    }
}

// state is the applcation state
function mapStateToProps(state) {
    return {
        activeBook: state.activeBook
    };
=======
import React, { Component } from "react";
import { connect } from "react-redux";

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Select a book to get started.</div>;
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
>>>>>>> upstream/master
}

export default connect(mapStateToProps)(BookDetail);
