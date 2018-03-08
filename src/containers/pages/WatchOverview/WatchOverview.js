import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './WatchOverview.css';
import checkWatchFilter from '../../../utils/data/checkWatchFilter';

import ProductList from '../../../components/ProductList/ProductList';
import * as actions from '../../../store/actions/index';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Button from '../../../components/UI/Button/Button';
import PageHeader from '../../../components/UI/PageHeader/PageHeader';
import WatchListControls from '../../WatchListControls/WatchListControls';

class WatchOverview extends Component {

  componentDidMount() {
    if(!this.props.watches.length > 0) {
      this.props.onFetchWatches();
    }
  }

  render() {
    let content = <Spinner />;
    if (!this.props.loading) {
      const displayWatches = this.props.watches.filter((watch) => (
        checkWatchFilter(watch, this.props.filters)
      ));
      content =
        <ProductList
          products={displayWatches}
          type={'watch'}
        />
    }
    return (
      <div className={classes.WatchOverview}>
        <div className={classes.pane}>
          <PageHeader>Manage Watches</PageHeader>
          <WatchListControls />
        </div>
        <div className={classes.content}>
          {content}
        </div>
      </div>
    );
  };
};

const mapDispatchToProps = (dispatch) => ({
  onFetchWatches: () => dispatch(actions.fetchWatches())
});

const mapStateToProps = (state) => ({
  watches: state.watchList.watches,
  loading: state.watchList.loading || (!state.watchList.watches.length > 0),
  filters: state.watchList.filters
});

export default connect(mapStateToProps, mapDispatchToProps)(WatchOverview);