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
}

export default connect(mapStateToProps)(BookDetail);
