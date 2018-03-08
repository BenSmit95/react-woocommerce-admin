import React, { Component } from 'react';
import { connect } from 'react-redux';
import { watchAvailability, watchDeliveryEstimate } from '../../../_secret/watchFormData';
import { setWatchFormField, toggleWatchFormCheckbox } from '../../../store/actions/index';
import classes from './OfferOptions.css';

import DropDownInput from '../../UI/Inputs/DropdownInput/DropdownInput';
import CheckboxInput from '../../UI/Inputs/CheckboxInput/CheckboxInput';
import SectionHeader from '../../UI/SectionHeader/SectionHeader';

class OfferOptions extends Component {
  render() {
    return (
      <section className={classes.OfferOptions}>
        <SectionHeader>Offer options</SectionHeader>
        <p>If you don't indicate availability, delivery, or price suggestion for this ad, the default settings will apply.</p>
        <DropDownInput 
          label={'Availability'}
          onChange={this.props.onValueChange}
          input={this.props.inputs.watchAvailability}
          options={watchAvailability}
        />
        {/* <CheckboxInput 
          label={'Several items available'}
          input={this.props.inputs.watchSeveralItemsAvailable}
          onChange={this.props.onCheckboxChange}
        /> */}
        <div className={classes.row}>
          <DropDownInput 
            label={'Domestic'}
            input={this.props.inputs.watchDomesticEstimate}
            onChange={this.props.onValueChange}
            options={watchDeliveryEstimate}
          />
          <DropDownInput 
            label={'Continental'}
            input={this.props.inputs.watchContinentalEstimate}
            onChange={this.props.onValueChange}
            options={watchDeliveryEstimate}
          />
          <DropDownInput 
            label={'Worldwide'}
            input={this.props.inputs.watchWorldwideEstimate}
            onChange={this.props.onValueChange}
            options={watchDeliveryEstimate}
          />
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  inputs: {
    watchAvailability: state.watchForm.watchAvailability,
    watchSeveralItemsAvailable: state.watchForm.watchSeveralItemsAvailable,
    watchDomesticEstimate: state.watchForm.watchDomesticEstimate,
    watchContinentalEstimate: state.watchForm.watchContinentalEstimate,
    watchWorldwideEstimate: state.watchForm.watchWorldwideEstimate,
  }
});

const mapDispatchToProps = (dispatch) => ({
  onValueChange: (fieldName, value) => dispatch(setWatchFormField(fieldName, value)),
  onCheckboxChange: (fieldName) => dispatch(toggleWatchFormCheckbox(fieldName))
});

export default connect(mapStateToProps, mapDispatchToProps)(OfferOptions);