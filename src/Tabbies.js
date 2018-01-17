//https://medium.com/trisfera/a-simple-react-tabs-component-47cac2cfbb5
//https://codepen.io/trey/post/tabbed-navigation-react

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
    <ul class="nav nav-tabs">
  <li class="nav-item">
    <a id="toseeTab" className={"nav-link active"} href="#">To See</a>
  </li>
  <li class="nav-item">
    <a id="watchedTab" class="nav-link" href="./Watched">Watched</a>
  </li>
</ul>
    );
  }
}

export default Tabbies;


 // onClick={(e) => {console.log(e)}}
 //onClick={(e) => {e.target.addClassName('active')}}