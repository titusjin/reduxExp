<<<<<<< HEAD
import React, { Component } from 'react';
=======
import React, { Component } from "react";
>>>>>>> upstream/master

class SearchBar extends Component {
  constructor(props) {
    super(props);

<<<<<<< HEAD
    this.state = { term: '' };
=======
    this.state = { term: "" };
>>>>>>> upstream/master
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
<<<<<<< HEAD
          onChange={event => this.onInputChange(event.target.value)} />
=======
          onChange={event => this.onInputChange(event.target.value)}
        />
>>>>>>> upstream/master
      </div>
    );
  }

  onInputChange(term) {
<<<<<<< HEAD
    this.setState({term});
=======
    this.setState({ term });
>>>>>>> upstream/master
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
