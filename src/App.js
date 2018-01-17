//https://gist.github.com/beth/3e7eb34ff1a46b674d40ece896c593c2

import React, { Component } from 'react';
import List from './List';
import Search from './Search';
import Add from './Add';
import Tabbies from './Tabbies';
import Watched from './Watched';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toSeeList: [
        // {title: 'Mean Girls'},
        // {title: 'Hackers'},
        // {title: 'The Grey'},
        // {title: 'Sunshine'},
        // {title: 'Ex Machina'},
      ],
      watchedList: [],
      searchInput: undefined,
      currentTab: 'toSeeTab'
    }
  }

  findMovie(input) {
    var temp = this.state.movieList.slice(0);
    // this.setState({searchInput: input});
    var movieMatches = temp.filter(el => {
      return el.title.toLowerCase().includes(input.toLowerCase())
    });
    this.setState({movieList: movieMatches})
  }

  addMovie(input) {
    var temp = this.state.toSeeList.slice(0);
    temp.push({title: input, watched: false});
    this.setState({movieList: temp});
    document.getElementById("addedMovie").value = "";
  }

  markWatched(index) {
    var temp = this.state.toSeeList.slice(0);
    temp[index].watched = true;
    this.setState({watchedList: temp})
  }

  switchTab(input) {
    this.setState({currentTab: input})

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Movie App</h1>
          <Add
          addMovie={this.addMovie.bind(this)}
          />
          <Search
          findMovie={this.findMovie.bind(this)}
          />
        </header>
        <Tabbies
        currentTab={this.state.currentTab}
        />
        <List
        watchedList={this.state.watchedList}
        toSeeList={this.state.toSeeList}
        searchInput={this.state.searchInput}
        currentTab={this.state.currentTab}
        // markWatched={this.markWatched.bind(this)}
        />
        <Watched
        movieList={this.state.movieList}
        currentTab={this.state.currentTab}
        />
      </div>
    );
  }
}

export default App;
