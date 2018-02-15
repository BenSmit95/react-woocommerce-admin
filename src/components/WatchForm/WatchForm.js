import React, { Component } from 'react';
import classes from './WatchForm.css';

import OfferInformation from './OfferInformation/OfferInformation';

class WatchForm extends Component {

    handleSubmit = () => {

    }

    render() {
        return (
            <form className={classes.WatchForm}>
                <OfferInformation />
                <button
                    onClick={this.handleSubmit}
                    className={classes.submit}
                >
                    Save Offer
                </button>
            </form>
        )
    }
}

export default WatchForm;