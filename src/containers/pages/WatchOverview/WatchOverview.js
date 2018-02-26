import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './WatchOverview.css';

import ProductList from '../../../components/ProductList/ProductList';
import * as actions from '../../../store/actions/index';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Button from '../../../components/UI/Button/Button';
import PageHeader from '../../../components/UI/PageHeader/PageHeader';

class WatchOverview extends Component {

  componentDidMount() {
    if(!this.props.watches.length > 0) {
      this.props.onFetchWatches();
    }
  }

  render() {
    let content = <Spinner />;
    if (!this.props.loading) {
      content =
        <ProductList
          products={this.props.watches}
          type={'watch'}
        />
    }
    return (
      <div className={classes.WatchOverview}>
        <div className={classes.pane}>
          <PageHeader>Manage Watches</PageHeader>
          <div className={classes.controls}>
            <Button
              onClick={this.props.onFetchWatches}
            >
              Fetch Watches
            </Button>
          </div>
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
  loading: state.watchList.loading || (!state.watchList.watches.length > 0)
});

export default connect(mapStateToProps, mapDispatchToProps)(WatchOverview);