import React, { Component } from 'react';
import classes from './WatchForm.css';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { Redirect } from 'react-router-dom';

import OfferInformation from './OfferInformation/OfferInformation';
import OfferOptions from './OfferOptions/OfferOptions';
import OfferArticlePrice from './OfferArticlePrice/OfferArticlePrice';
import OfferAdditionalDetails from './OfferAdditionalDetails/OfferAdditionalDetails';
import OfferPictures from './OfferPictures/OfferPictures';
import OfferStatus from './OfferStatus/OfferStatus';
import Button from '../UI/Button/Button';
import Spinner from '../UI/Spinner/Spinner';

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
        if(this.props.submitted) {
            return <Redirect to="/watch/list" />
        }
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
                {this.props.loading ? <Spinner /> : null}
                <div className={classes.buttons}>
                    <Button
                        onClick={this.handleCheckForm}
                        disabled={this.props.valid || this.props.imageLoading}
                    >
                        Validate
                    </Button>
                    <Button
                        onClick={this.handleSubmit}
                        disabled={!this.props.valid || this.props.imageLoading}
                    >
                        Save Offer
                    </Button>
                </div>
                
            </form>
        )
    }
}

const mapStateToProps = (state) => ({
    valid: state.watchForm.valid,
    submitted: state.watchForm.submitted,
    loading: state.watchForm.loading,
    error: state.watchForm.error,
    imageLoading: state.watchForm.imageLoading,
});

const mapDispatchToProps = (dispatch) => ({
    onCheckForm: () => dispatch(actions.checkWatchform())
});

export default connect(mapStateToProps, mapDispatchToProps)(WatchForm);