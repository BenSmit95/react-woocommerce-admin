import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ProductListItem.css';

const ProductListItem = (props) => {
  const linkUrl = props.type === 'watch' ? '/watch/edit' : '/jewelry/edit'
  return (
    <li className={classes.ProductListItem}>
      <Link to={`${linkUrl}/${props.product.id}`}>
        {props.product.name} | {props.product.price}
      </Link>
    </li>
  );
};

export default ProductListItem;