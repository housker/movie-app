//https://medium.com/trisfera/a-simple-react-tabs-component-47cac2cfbb5
//https://codepen.io/trey/post/tabbed-navigation-react


//There are issues with Tabs. Add active after the click so that tab looks different. Get the right rendering.  Corresponding what's active with waht's been clicked.

//render everything in list, have in state the tab: 1/2/etc, and the watched: [], and toWatch: []

//when localhosting for links that go to different webpages, use react-router


import React, { Component } from 'react';

class Tabbies extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
    <ul className="nav nav-tabs">
  <li className="nav-item">
    <a id="toSeeTab" onClick={() => {this.props.switchTab("toSeeTab")}} className={this.props.toSeeTab.currentTab ? "nav-link active" : "nav-link"} >To See</a>
  </li>
  <li className="nav-item">
    <a id="watchedTab" onClick={() => {this.props.switchTab("watchedTab")}} className={this.props.watchedTab.currentTab ? "nav-link active" : "nav-link"}>Watched</a>
  </li>
    <li className="nav-item">
    <a id="searchResultsTab" onClick={() => {this.props.switchTab("searchResultsTab")}} className={this.props.searchResultsTab.currentTab ? "nav-link active" : "nav-link"}>Search Results</a>
  </li>
</ul>
    );
  }
}

export default Tabbies;


// () => {switchTab(document.getElementById("toSeeTab").value)}

 // onClick={(e) => {console.log(e)}}
 //onClick={(e) => {e.target.addClassName('active')}}