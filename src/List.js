import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
      <ul>
       {
        this.props.movieList.map((el, i) => {
          var inputMatch = new RegExp(this.props.searchInput, "gi");
          if (el.title.includes(this.props.searchInput)) {
            var highlightedTitle = el.title.replace(inputMatch, <span></span>)
            console.log(highlightedTitle);
          }





          //   return (
          //     <div style={{"listStyle": "none"}} key={el.title}> {splitTitle.map((el, i) => {
          //       return <span key={i} style={el.toLowerCase() === inputMatch.toLowerCase() ? { fontWeight: 'bold'} : {} }> {el} </span>   }
          //     })}
          //     )



          //    <span style={{textDecoration: "line-through"}} dangerouslySetInnerHTML={{__html: inputMatch}}></span>)
          //   // return (
          //   //   el.title = el.title.replace(inputMatch, <div style={{color: "yellow"}}>{el.title}</div>)
          //   //   <li style={{"listStyle": "none"}} key={el.title}>{el.title}</li>
          //   //   )
          // }
          return (

            <li style={{"listStyle": "none"}} key={el.title}>{el.title}</li>
          )
       })
      }
      <pre>{this.props.searchInput}</pre>
      </ul>
    );
  }
}

export default List;


// getHighlightedText(text, higlight) {
//     // Split on higlight term and include term into parts, ignore case
//     let parts = text.split(new RegExp(`(${higlight})`, 'gi'));
//     return <span> { parts.map((part, i) =>
//         <span key={i} style={part.toLowerCase() === higlight.toLowerCase() ? { fontWeight: 'bold' } : {} }>
//             { part }
//         </span>)
//     } </span>;
// }