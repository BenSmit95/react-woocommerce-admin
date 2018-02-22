import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

import WatchForm from '../../../components/WatchForm/WatchForm';

class EditWatch extends Component {
  componentDidMount() {
    const id = this.props.location.pathname.split('/').pop();
    this.props.onFetchWatch(id);
  }

  render() {
    return (
      <div>
        <h1>Edit watch</h1>
        
        <WatchForm />
      </div>
    );
  };
};

const mapStateToProps = (state) => ({
  loading: state.watchForm.loading
});

const mapDispatchToProps = (dispatch) => ({
  onResetForm: () => dispatch(actions.resetWatchForm()),
  onFetchWatch: (id) => dispatch(actions.fetchWatch(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditWatch);