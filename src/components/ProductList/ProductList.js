import React from 'react';
import ProductListItem from './ProductListItem/ProductListItem';

const ProductList = (props) => {
  const products = props.products.map((product) => (
    <ProductListItem 
      key={product.id}
      product={product} 
      type={props.type}
    />
  ))
  return (
    <ol>
      {products}
    </ol>
  )
}

export default ProductList;