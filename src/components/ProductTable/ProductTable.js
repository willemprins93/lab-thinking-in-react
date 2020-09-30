import React from 'react';
import ProductRow from '../ProductRow/ProductRow';
import './ProductTable.css'

const ProductTable = (props) => {
  const {products} = props

    return (
      <div className="product-table">
        <div className="row-description">
          <p>Name</p>
          <p>Price</p>
        </div>
        {products.map((product) => {
          return <ProductRow key={product.id} product={product} />;
        })}
      </div>
    );
}

export default ProductTable;
