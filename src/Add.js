import React, { Component } from 'react';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
      <div>
      <input id="addedMovie"></input>
      <button onClick={() => this.props.addMovie(document.getElementById("addedMovie").value)}>Add</button>
      </div>
    );
  }
}

export default Add;
