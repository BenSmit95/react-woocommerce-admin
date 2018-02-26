import React from 'react';
import ProductListItem from './ProductListItem/ProductListItem';
import classes from './ProductList.css';

const ProductList = (props) => {
  const products = props.products.map((product) => (
    <ProductListItem 
      key={product.id}
      product={product} 
      type={props.type}
    />
  ))
  return (
    <ol className={classes.ProductList}>
      {products}
    </ol>
  )
}

export default ProductList;