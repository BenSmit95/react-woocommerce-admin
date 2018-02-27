import React, { Component } from 'react';
import classes from './WatchForm.css';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

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

    handleCheckForm = (e) => {
        e.preventDefault();
        this.props.onCheckForm();
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
                <div className={classes.buttons}>
                    <Button
                        onClick={this.handleCheckForm}
                        disabled={this.props.valid}
                    >
                        Validate
                    </Button>
                    <Button
                        onClick={this.handleSubmit}
                        disabled={!this.props.valid}
                    >
                        Save Offer
                    </Button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => ({
    valid: state.watchForm.valid
});

const mapDispatchToProps = (dispatch) => ({
    onCheckForm: () => dispatch(actions.checkWatchform())
});

export default connect(mapStateToProps, mapDispatchToProps)(WatchForm);