import React, { Component } from 'react';
import classes from './WatchForm.css';

import OfferInformation from './OfferInformation/OfferInformation';

class WatchForm extends Component {

    render() {
        return (
            <form className={classes.WatchForm}>
                <OfferInformation />
            </form>
        )
    }
}

export default WatchForm;