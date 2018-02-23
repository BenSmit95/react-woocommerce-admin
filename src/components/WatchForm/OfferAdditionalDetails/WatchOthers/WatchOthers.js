import React, { Component } from 'react';
import { connect } from 'react-redux';
import { watchOthers } from '../../../../_secret/watchFormData';
import { toggleMassWatchFormCheckbox } from '../../../../store/actions/index';
import classes from './WatchOthers.css';

import MassCheckboxInput from '../../../UI/Inputs/MassCheckboxInput/MassCheckboxInput';

class WatchOthers extends Component {
  render() {

    const checkboxes = watchOthers.map((functionObj, index) => (
      <MassCheckboxInput
        key={`functions${index}`}
        label={functionObj.label}
        name={functionObj.name}
        fieldName={'watchOthers'}
        onCheckboxToggle={this.props.onCheckboxToggle}
        checked={this.props.others[functionObj.name].value}
      />
    ))

    return (
      <div className={classes.WatchOthers}>
        {checkboxes}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  others: state.watchForm.watchOthers
});

const mapDispatchToProps = (dispatch) => ({
  onCheckboxToggle: (fieldName, attribute) => dispatch(toggleMassWatchFormCheckbox(fieldName, attribute))
})

export default connect(mapStateToProps, mapDispatchToProps)(WatchOthers);