import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {value: ''}
    this.onInputChange = this.onInputChange.bind(this);
  }
    render() {
        return <input type ="text" placeholder="Search" value={this.state.value} onChange={this.onInputChange} /> ;
    }
    onInputChange(event){
      console.log(event.target.value);
      this.props.search(event.target.value);
       this.setState({value: event.target.value});
    }
}
export default SearchBar;
