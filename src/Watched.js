import React, { Component } from 'react';

class Watched extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


    render() {
      if(this.props.currentTab === "watchedTab") {
        return (
          <ul>
            {
              this.props.movieList.map((el, i) => {
                // var inputMatch = new RegExp(this.props.searchInput, "gi");
                // if (el.title.includes(this.props.searchInput)) {
                //   el.title = el.title.replace(inputMatch, <span style={{color: "yellow"}}>{el.title}</span>)
                // }
                  return (
                    <div key={el.title}>
                      <li style={{"listStyle": "none"}}>{el.title}</li>
                      <button onClick={() => {this.props.markWatched(i)}}>Watch Again</button>
                    </div>
                  )
              })
            }
          </ul>
        );
      } else {
        return null;
      }
    }

}

export default Watched;