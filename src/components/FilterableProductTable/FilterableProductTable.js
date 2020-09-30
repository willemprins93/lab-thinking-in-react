import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable';
import data from '../../data.json';
import './FilterableProductTable.css';

class FilterableProductTable extends Component {
  state = {
    products: this.props.products.data,
    onlyInStock: false,
  };

  inputChange = (searchQuery) => {
    const newProductArr = data.data.filter((product) => {
      return product.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
    this.setState({
      products: newProductArr,
    });
  };

  onlyInStock = (inStock) => {
      this.setState({
        onlyInStock: inStock,
      });

  };

  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar
          inputChange={this.inputChange}
          onlyInStock={this.onlyInStock}
        />
        <ProductTable
          products={this.state.products.filter((product) => {
            return this.state.onlyInStock ? product.stocked === true : product;
          })}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
