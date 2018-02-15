import React, { Component } from 'react';
import classes from './CreateWatch.css';

import WatchForm from '../../../components/WatchForm/WatchForm';

class CreateWatch extends Component {
    render() {
        return (
            <div className={classes.Container}>
                <h1>Create a new Offer</h1>
                <WatchForm />
            </div>
        )
    }
}

export default CreateWatch;