import React from 'react';
import Navigation from '../Navigation/Navigation';
import classes from './Layout.css';

const Layout = (props) => (
    <div className={classes.Layout}>
        <Navigation />
        <div className={classes.main}>
            {props.children}
        </div>
    </div>
);

export default Layout;