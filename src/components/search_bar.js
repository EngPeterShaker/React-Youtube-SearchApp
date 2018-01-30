// import React from "react";
import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "init" };
  }

  render() {
    return(
    <div>
      <input 
      value={this.state.term}
      onChange={event => this.OnInputChange(event)} />
        <p>value of input :{this.state.term}</p>
    </div>
  );  
}
  
  OnInputChange (event) {
    this.setState ({ term:event.target.value })
    this.props.onSearch(event.target.value);
    // this.setState ({ term: event.target.value })}/>
    // props.onSearch ( event.target.value )}/>
  }
}
export default SearchBar;
