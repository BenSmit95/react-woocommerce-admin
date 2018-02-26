import React from 'react';
import classes from './PageHeader.css';

const PageHeader = (props) => (
  <h1 className={classes.PageHeader}>{props.children}</h1>
);

export default PageHeader;