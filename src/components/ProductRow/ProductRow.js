import React from 'react';
import './ProductRow.css';

const ProductRow = (props) => {
  const { product } = props;

  return (
    <div className="wrapper">
      <div className="product-row">
        <p className={!product.stocked ? 'out-of-stock' : null}>
          {product.name}
        </p>
        <p className={!product.stocked ? 'out-of-stock' : null}>
          {product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductRow;
