import React, { Component } from 'react';
import classes from './WatchForm.css';

import OfferInformation from './OfferInformation/OfferInformation';
import OfferOptions from './OfferOptions/OfferOptions';
import OfferArticlePrice from './OfferArticlePrice/OfferArticlePrice';
import OfferAdditionalDetails from './OfferAdditionalDetails/OfferAdditionalDetails';
import OfferPictures from './OfferPictures/OfferPictures';
import OfferStatus from './OfferStatus/OfferStatus';
import Button from '../UI/Button/Button';

class WatchForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit();
    }

    render() {
        return (
            <form className={classes.WatchForm} onSubmit={this.handleSubmit}>
                <OfferInformation />
                <hr />
                <OfferOptions />
                <hr />
                <OfferArticlePrice />
                <hr />
                <OfferAdditionalDetails />
                <hr />
                <OfferStatus />
                <hr />
                <OfferPictures />
                <Button
                    onClick={this.handleSubmit}
                >
                    Save Offer
                </Button>
            </form>
        )
    }
}



export default WatchForm;