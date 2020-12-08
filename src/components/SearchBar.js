import React, { useState, useEffect } from "react";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");
  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onFormSubmit(term);
  };
  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input
            onChange={(e) => setTerm(e.target.value)}
            type="text"
            value={term}
          ></input>
        </div>
      </form>
    </div>
  );
};

// class SearchBar extends React.Component {
//   state = { term: "" };

//   onFormSubmit = (event) => {
//     event.preventDefault();
//     this.props.onFormSubmit(this.state.term);
//   };
//   render() {
//     return (
//       <div className="search-bar ui segment">
//         <form className="ui form" onSubmit={this.onFormSubmit}>
//           <div className="field">
//             <label>Video Search</label>
//             <input
//               onChange={(e) => this.setState({ term: e.target.value })}
//               type="text"
//               value={this.state.term}
//             ></input>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

export default SearchBar;
