import React from 'react';
import classes from './SectionHeader.css';

const SectionHeader = (props) => (
  <h3 className={classes.SectionHeader}>{props.children}</h3>
);

export default SectionHeader;