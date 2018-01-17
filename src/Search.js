import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
      <div>
        <input id="movieQuery"></input>
        <button onClick={() => {this.props.findMovie(document.getElementById("movieQuery").value)}}>Search</button>
      </div>
    );
  }
}

export default Search;

