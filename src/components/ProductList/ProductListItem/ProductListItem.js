import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ProductListItem.css';

const ProductListItem = (props) => {
  const linkUrl = props.type === 'watch' ? '/watch/edit' : '/jewelry/edit'
  return (
    <li className={classes.ProductListItem}>
      
      <Link 
        className={classes.link}
        to={`${linkUrl}/${props.product.id}`}
      >
        <img src={props.product.image} alt="preview image" className={classes.image} />
        {props.product.name} | {props.product.price} | {props.product.ref}
      </Link>
    </li>
  );
};

export default ProductListItem;