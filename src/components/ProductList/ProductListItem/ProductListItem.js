import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ProductListItem.css';

const ProductListItem = (props) => {
  const linkUrl = props.type === 'watch' ? '/watch/edit' : '/jewelry/edit';

  if(props.product.ref);
  return (
    <li className={classes.ProductListItem}>
      
      <Link 
        className={classes.link}
        to={`${linkUrl}/${props.product.id}`}
      >
      <div className={classes.container}>
        <img src={props.product.image} alt="preview" className={classes.image} />
        <div className={classes.textarea}>
          <h4>{props.product.name}</h4>
          <h5 className={classes.price}>€{props.product.price}</h5>
          <table>
            <tbody>
              {props.product.ref ? <tr><th>Ref</th><td>{props.product.ref}</td></tr> : null}
              {props.product.brand ? <tr><th>Brand</th><td>{props.product.brand}</td></tr> : null}
              {props.product.model ? <tr><th>Model</th><td>{props.product.model}</td></tr> : null}
            </tbody>
          </table>
        </div>
      </div>
      </Link>
    </li>
  );
};

export default ProductListItem;