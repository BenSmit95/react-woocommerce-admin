import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import classes from './EditJewelry.css';

import JewelryForm from '../../../components/JewelryForm/JewelryForm';
import Spinner from '../../../components/UI/Spinner/Spinner';
import PageHeader from '../../../components/UI/PageHeader/PageHeader';

class EditJewelry extends Component {

  componentDidMount() {
    const id = this.props.location.pathname.split('/').pop();
    this.props.onFetchJewelry(id);
  }

  onSubmit = () => {
    this.props.onSubmit(Number(this.props.location.pathname.split('/').pop()));
  }

  render() {
    let content;
    if (this.props.loading) {
      content = (
        <div className={classes.spinner}>
          <Spinner />
        </div>
      )
    } else {
      content = <JewelryForm onSubmit={this.onSubmit} />
    }
    return (
      <div className={classes.EditJewelry}>
        <PageHeader>Edit jewelry</PageHeader>
        <div className={classes.content}>
          {content}
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  loading: !state.jewelryForm.jewelryPrice.value
});

const mapDispatchToProps = (dispatch) => ({
  onFetchJewelry: (id) => dispatch(actions.fetchJewel(id)),
  onSubmit: (id) => dispatch(actions.updateJewelryFormOffer(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditJewelry);