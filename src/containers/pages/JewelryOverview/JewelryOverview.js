import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkJewelryFilter } from '../../../utils/data/checkJewelryFilter';
import classes from './JewelryOverview.css';
import * as actions from '../../../store/actions/index';

import ProductList from '../../../components/ProductList/ProductList';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Button from '../../../components/UI/Button/Button';
import PageHeader from '../../../components/UI/PageHeader/PageHeader';
import JewelryListControls from '../../JewelryListControls/JewelryListControls';

class JewelryOverview extends Component {
  componentDidMount() {
    if(!this.props.jewelry.length > 0) {
      this.props.onFetchJewelry()
    }
  }
  render() {
    let content = <Spinner />;
    if (!this.props.loading) {
      const displayJewelry = this.props.jewelry.filter((jewelry) => (
        checkJewelryFilter(jewelry, this.props.filters)
      ));
      content =
        <ProductList
          products={displayJewelry}
          type={'jewelry'}
        />
    }

    return (
      <div className={classes.JewelryOverview}>
        <div className={classes.pane}>
          <PageHeader>Manage Jewelry</PageHeader>
          <JewelryListControls />
        </div>
        <div className={classes.content}>
          {content}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  onFetchJewelry: () => dispatch(actions.fetchJewelry())
});

const mapStateToProps = (state) => ({
  jewelry: state.jewelryList.jewelry,
  loading: state.jewelryList.loading || (!state.jewelryList.jewelry.length > 0),
  filters: state.jewelryList.filters
});

export default connect(mapStateToProps, mapDispatchToProps)(JewelryOverview);