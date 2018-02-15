import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './WatchForm.css';

import { postWatchFormOffer } from '../../store/actions/index';

import OfferInformation from './OfferInformation/OfferInformation';
import OfferOptions from './OfferOptions/OfferOptions';
import OfferArticlePrice from './OfferArticlePrice/OfferArticlePrice';
import OfferAdditionalDetails from './OfferAdditionalDetails/OfferAdditionalDetails';

class WatchForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit();
    }

    render() {
        return (
            <form className={classes.WatchForm}>
                <OfferInformation />
                <OfferOptions />
                <OfferArticlePrice />
                <OfferAdditionalDetails />
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

const mapDispatchToProps = (dispatch) => ({
    onSubmit: () => dispatch(postWatchFormOffer())
}) 

export default connect(undefined, mapDispatchToProps)(WatchForm);