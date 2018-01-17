import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    if (this.props.currentTab === "toSeeTab") {
      return (
        <ul>
        {this.props.toSeeList.map((el, i) => {
          <div key={el.title}>
            <li style={{"listStyle": "none"}}>{el.title}</li>
            <button onClick={() => {this.props.markWatched(i)}}>Watched</button>
          </div>
        })}
        </ul>
      )
    } else if (this.props.currentTab === "watchedTab") {
      return (
        <ul>
          {this.props.toSeeList.map((el, i) => {
            <div key={el.title}>
              <li style={{"listStyle": "none"}}>{el.title}</li>
              <button onClick={() => {this.props.markWatched(i)}}>Watched</button>
            </div>
          })}
        </ul>
      )
    }
  }
}

export default List;





    // var inputMatch = new RegExp(this.props.searchInput, "gi");
                  // if (el.title.includes(this.props.searchInput)) {
                  //   el.title = el.title.replace(inputMatch, <span style={{color: "yellow"}}>{el.title}</span>)
                  // }

      // <ul>
      //   {



      //         )

      //     } else if  {
      //       return (
      //           this.props.toSeeList.map((el, i) => {
      //             // var inputMatch = new RegExp(this.props.searchInput, "gi");
      //             // if (el.title.includes(this.props.searchInput)) {
      //             //   el.title = el.title.replace(inputMatch, <span style={{color: "yellow"}}>{el.title}</span>)
      //             // }
      //             if(!el.watched) {
      //               return (
      //                 <div key={el.title}>
      //                   <li style={{"listStyle": "none"}}>{el.title}</li>
      //                   <button onClick={() => {this.props.markWatched(i)}}>Watched</button>
      //                 </div>
      //               )
      //             }
      //           })

      //         )

      //     }

      //   }
      // </ul>
