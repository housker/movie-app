//https://gist.github.com/beth/3e7eb34ff1a46b674d40ece896c593c2

import React, { Component } from 'react';
import List from './List';
import Search from './Search';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ],
      searchInput: undefined
    }
  }

  findMovie(input) {
    // var temp = this.state.searchInput;
    // temp = input;
    this.setState({searchInput: input});
    // var temp = this.state.movieList.slice(0);
    // var inputMatch = new RegExp(input, "gi");
    // var hlMovies = temp.forEach(el => {
    //   if (el.title.includes(input)) {
    //     el.title.replace(inputMatch, <div className="hl">{el.title}</div>)
    //   }
    // })
    // this.setState({movieList: hlMovies})

    // var movieMatches = temp.filter(el => {
    //   return el.title.toLowerCase().includes(input.toLowerCase())
    // });
    // this.setState({movieList: movieMatches})

    // var highlight = temp.title.replace(inputMatch, <div className="hl">{this.value}</div>)
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Movie App</h1>
          <Search
          findMovie={this.findMovie.bind(this)}
          />
        </header>
        <List
        movieList={this.state.movieList}
        searchInput={this.state.searchInput}
        />
      </div>
    );
  }
}

export default App;
