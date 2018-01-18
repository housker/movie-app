//https://gist.github.com/beth/3e7eb34ff1a46b674d40ece896c593c2

//Questions for office hours: (1) This doesn't seem like a scalable way to do tabs (see switchTab function); what's a better way that can work for undertermined number of tabs? (2) I'd like to improve how the button works (currently one-way, no take-backs when marking movie "watched"). (3) I'd like search result to highlight movies in the respective tab, or in search tab, indicate it it's been watched.

import React, { Component } from 'react';
import List from './List';
import Search from './Search';
import Add from './Add';
import Tabbies from './Tabbies';
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
      searchResultsList: [],
      searchInput: undefined,
      toSeeTab: {currentTab: true, className: "nav-link active"},
      watchedTab: {currentTab: false, className: "nav-link"},
      searchResultsTab: {currentTab: false, className: "nav-link"}
    }
  }
  //consider refactoring all arrays into array state, all tabs into tab state {title: "toSeeTab", currentTab: true, className: "nav-link active"}, etc.

  findMovie(input) {
    //make search tab and set it to active, set the others to inactive
    let tempToSeeList = this.state.toSeeList.slice(0);
    let tempWatchedList = this.state.watchedList.slice(0);
    let tempAllList = tempToSeeList.concat(tempWatchedList);
    let tempSearchList = tempAllList.filter(el => {
      return el.title.toLowerCase().includes(input.toLowerCase())
    });
    tempSearchList.length ? tempSearchList : tempSearchList = [{title: "No Matches"}]
    this.setState({searchResultsList: tempSearchList});
    this.setState({toSeeTab: {currentTab: false, className: "nav-link"}});
    this.setState({watchedTab: {currentTab: false, className: "nav-link"}});
    this.setState({searchResultsTab: {currentTab: true, className: "nav-link active"}});
    // var movieMatches = temp.filter(el => {
    //   return el.title.toLowerCase().includes(input.toLowerCase())
    // });
    // this.setState({movieList: movieMatches})
  }

  addMovie(input) {
    var temp = this.state.toSeeList.slice(0);
    temp.push({title: input, watched: false});
    this.setState({toSeeList: temp});
    document.getElementById("addedMovie").value = "";
  }

  markWatched(el, i) {
    el.watched = true;
    var tempWatched = this.state.watchedList.slice(0);
    tempWatched.push(el);
    var tempToSee = this.state.toSeeList.slice(0);
    tempToSee.splice(i, 1);
    this.setState({toSeeList: tempToSee})
    this.setState({watchedList: tempWatched})
  }

  switchTab(tabId) {
    if(tabId === "toSeeTab") {
      this.setState({toSeeTab: {currentTab: true, className: "nav-link active"}});
      this.setState({watchedTab: {currentTab: false, className: "nav-link"}});
      this.setState({searchResultsTab: {currentTab: false, className: "nav-link"}});
    } else if(tabId === "watchedTab") {
      this.setState({toSeeTab: {currentTab: false, className: "nav-link"}});
      this.setState({watchedTab: {currentTab: true, className: "nav-link active"}});
      this.setState({searchResultsTab: {currentTab: false, className: "nav-link"}});
    } else if(tabId === "searchResultsTab") {
      this.setState({toSeeTab: {currentTab: false, className: "nav-link"}});
      this.setState({watchedTab: {currentTab: false, className: "nav-link"}});
      this.setState({searchResultsTab: {currentTab: true, className: "nav-link active"}});
    }
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
        toSeeTab={this.state.toSeeTab}
        watchedTab={this.state.watchedTab}
        switchTab={this.switchTab.bind(this)}
        searchResultsTab={this.state.searchResultsTab}
        />
        <List
        toSeeTab={this.state.toSeeTab}
        watchedTab={this.state.watchedTab}
        searchResultsTab={this.state.searchResultsTab}
        watchedList={this.state.watchedList}
        toSeeList={this.state.toSeeList}
        searchResultsList={this.state.searchResultsList}
        searchInput={this.state.searchInput}
        currentTab={this.state.currentTab}
        markWatched={this.markWatched.bind(this)}
        />
      </div>
    );
  }
}

export default App;
