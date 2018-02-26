import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

import WatchForm from '../../../components/WatchForm/WatchForm';
import Spinner from '../../../components/UI/Spinner/Spinner';

class EditWatch extends Component {

  componentDidMount() {
    // Fetch ID and get proper watch from API
    const id = this.props.location.pathname.split('/').pop();
    this.props.onFetchWatch(id);
  }

  onSubmit = () => {
    this.props.onSubmit(Number(this.props.location.pathname.split('/').pop()));
  }

  render() {
    let content;
    if(this.props.loading) {
      content = <Spinner />
    } else {
      content = <WatchForm onSubmit={this.onSubmit}/>
    }
    return (
      <div>
        <h1>Edit watch</h1>
        {content}
      </div>
    );
  };
};

const mapStateToProps = (state) => ({
  loading: !state.watchForm.watchPrice.value
});

const mapDispatchToProps = (dispatch) => ({
  onFetchWatch: (id) => dispatch(actions.fetchWatch(id)),
  onSubmit: (id) => dispatch(actions.updateWatchFormOffer(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditWatch);