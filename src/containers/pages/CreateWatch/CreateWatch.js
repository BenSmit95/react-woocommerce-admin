import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import classes from './CreateWatch.css';

import WatchForm from '../../../components/WatchForm/WatchForm';
import PageHeader from '../../../components/UI/PageHeader/PageHeader';

class CreateWatch extends Component {

    componentDidMount() {
        this.props.onResetWatchform();
    }

    render() {
        return (
            <div className={classes.CreateWatch}>
                <PageHeader>Create a new Offer (Watches)</PageHeader>
                <div className={classes.content}>
                    <WatchForm onSubmit={this.props.onSubmit} />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    onResetWatchform: () => dispatch(actions.resetWatchform()),
    onSubmit: () => dispatch(actions.postWatchFormOffer())
});

export default connect(null, mapDispatchToProps)(CreateWatch);