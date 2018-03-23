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
    <div className={classes.ProductList}>
      <h3>Currently showing {products.length} items</h3>
      <ol className={classes.list}>
        {products}
      </ol>
    </div> 
  )
}

export default ProductList;