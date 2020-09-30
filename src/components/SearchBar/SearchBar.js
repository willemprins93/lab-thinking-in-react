import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  state = {
    searchQuery: '',
    onlyInStock: false
  };

  handleInputChange = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => this.props.inputChange(this.state.searchQuery)
    );
  };

  toggleInStock = (e) => {
      this.setState({
        [e.target.name]: !this.state.onlyInStock
      }, () => this.props.onlyInStock(this.state.onlyInStock))
  }

  render() {
    return (
      <div>
        <input
          className="search-bar"
          type="text"
          name="searchQuery"
          placeholder="Search..."
          value={this.state.searchQuery}
          onChange={this.handleInputChange}
        />
        <br />
        <input
          className="in-stock-check"
          type="checkbox"
          name="onlyInStock"
          value={this.state.onlyInStock}
          onChange={this.toggleInStock}
        />
        <label for="onlyInStock">Only show products in stock</label>
      </div>
    );
  }
}

// () => this.props.inputChange(this.state.searchQuery)

export default SearchBar;
