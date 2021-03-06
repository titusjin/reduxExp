<<<<<<< HEAD
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

import ReactDOM from 'react-dom';

import Deepblu from '../components/deepblu';
=======
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";
>>>>>>> upstream/master

class SearchBar extends Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
    this.state = { term: '' };
=======

    this.state = { term: "" };
>>>>>>> upstream/master

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

<<<<<<< HEAD
  /**
     We can also use componentWillMount to implement the same bind like :
     this.onInputChange = this.onInputChange.bind(this);
     this.onFormSubmit = this.onFormSubmit.bind(this);

     However, not recommand do that on this method
     instead we shold do that on constructor

     Can check the reactjs official document.
   **/
  componentWillMount(){
  }

  onInputChange(event) {
      this.setState({ term: event.target.value });
  }
  /**
   * according to one Q&A : above onInputChange method can be rewrited
   * like below and without the need to do {bind} in constructor
   */
  // onInputChange = event => {
  //     this.setState({ term : event.target.value });
  //     console.log('the state change to : ', this.state);
  // }
  //



  /**
   *  Just use form submit handler to both handle the key press and
   *  hitting button user interactoin.
   */
=======
  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

>>>>>>> upstream/master
  onFormSubmit(event) {
    event.preventDefault();

    // We need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
<<<<<<< HEAD

    // open below : search bar text will be cleaned up after from is submit
    // Cause in action : axios is a promise.  
    this.setState({ term: '' });
=======
    this.setState({ term: "" });
>>>>>>> upstream/master
  }

  render() {
    return (
<<<<<<< HEAD
        <div className="test">
          <form onSubmit={this.onFormSubmit} className="input-group">
            <input
              placeholder="Get a five-day forecast in your favorite cities"
              className="form-control"
              value={this.state.term}
              onChange={this.onInputChange} />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-secondary">Submit</button>
            </span>
          </form>
          <Deepblu />
        </div>
=======
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
>>>>>>> upstream/master
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

<<<<<<< HEAD
/**
 * NOTE : The first augement is null :  
 * let redux know that this container don't need to know
 * any application states at all.
 */
=======
>>>>>>> upstream/master
export default connect(null, mapDispatchToProps)(SearchBar);
