<<<<<<< HEAD
import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectBook from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
        return (
            <li
              key={book.title}
              className="list-group-item"
              onClick={() => this.props.selectBook(book)}>
              {book.title}
            </li>
        );
    });
  }

  renderAuthors(){
    return this.props.authors.map( (author) => {
        return (
            <li key={author.name} className = 'list-group-item'>
                {author.name}
            </li>
        );
=======
import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item"
        >
          {book.title}
        </li>
      );
>>>>>>> upstream/master
    });
  }

  render() {
<<<<<<< HEAD
    console.log('are we here ??');
    return (
        <div>
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
            <ul className="list-group col-sm-4">
                {this.renderAuthors()}
            </ul>
        </div>
    )
  }
}

/**
 *  mapStateToProps & mapDispatchToProps all comes from react-redux module
 */
// Whatever is returned will show up as props
// inside of BookList
function mapStateToProps(state) {
    // Here, State refers to application state.
    //
    // cause the return of this method will be acessed in the contianer
    // as this.props. SO if u use like : return { fdacda : 12r32eq}
    // we can have this.props.fdacda and get 12r32eq as return

    // No matter how many reducers in the applications we can all included into our container
    return {
        books: state.books,
        authors: state.authors
    };
}

// Anything returned form this function will end up as props
// on the BookList container
// as we use mapDispatchToProps : in this container we can all use this.props.selectBook to refers to the action creator.
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should be passed
    // to all of our reducers by disaptch(like a tunnel)
    return bindActionCreators({ selectBook }, dispatch);
    // return bindActionCreators({selectBook: selectBook}, dispatch);
=======
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of BookList
  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result shoudl be passed
  // to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
>>>>>>> upstream/master
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
<<<<<<< HEAD

// export default connect(mapStateToProps, mapDispatchToProps)(BookList);
export default connect(mapStateToProps, { selectBook })(BookList);
=======
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
>>>>>>> upstream/master
