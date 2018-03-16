import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './CreateJewelry.css';
import * as actions from '../../../store/actions/index';

import PageHeader from '../../../components/UI/PageHeader/PageHeader';
import JewelryForm from '../../../components/JewelryForm/JewelryForm';

class CreateJewelry extends Component {

  componentDidMount() {
    this.props.onReset();
  }

  render() {
    return (
      <div className={classes.CreateJewelry}>
        <PageHeader>Create a new Offer (Jewelry)</PageHeader>
        <JewelryForm onSubmit={this.props.onSubmit} />
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  onReset: () => dispatch(actions.resetJewelryform()),
  onSubmit: () => dispatch(actions.postJewelryFormOffer())
});

export default connect(undefined, mapDispatchToProps)(CreateJewelry);