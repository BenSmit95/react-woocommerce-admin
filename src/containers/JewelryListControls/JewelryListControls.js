import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import classes from './JewelryListControls.css';

import Button from '../../components/UI/Button/Button';
import SectionHeader from '../../components/UI/SectionHeader/SectionHeader';

class JewelryListControls extends Component {
  render() {
    return (
      <div className={classes.JewelryListControls}>
        <SectionHeader>Filter</SectionHeader>
        <div className={classes.inputContainer}>
        </div>

        <Button
          onClick={this.props.onFetchJewelry}
        >
          Fetch Watches
        </Button>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  onFetchJewelry: () => dispatch(actions.fetchJewelry())
});

export default connect(mapStateToProps, mapDispatchToProps)(JewelryListControls);