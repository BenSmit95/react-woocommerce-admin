import React from 'react';
import Navigation from '../Navigation/Navigation';
import classes from './Layout.css';

const Layout = (props) => (
    <div className={classes.Layout}>
        <div className={classes.nav}>
            <Navigation />
        </div>
        <main className={classes.main}>
            {props.children}
        </main>
    </div>
);

export default Layout;