import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './JewelryDeliveryInformation.css';
import { jewelryDeliveryEstimate, jewelryAvailability } from '../../../_secret/jewelryFormData';
import * as actions from '../../../store/actions/index';

import SectionHeader from '../../UI/SectionHeader/SectionHeader';
import DropdownInput from '../../UI/Inputs/DropdownInput/DropdownInput';
import CheckboxInput from '../../UI/Inputs/CheckboxInput/CheckboxInput';

class JewelryDeliveryInformation extends Component {
  render() {
    return (
      <section>
        <SectionHeader>Offer Delivery Information</SectionHeader>

        <DropdownInput
          label={'Availability'}
          options={jewelryAvailability}
          input={this.props.inputs.jewelryAvailability}
          onChange={this.props.onValueChanged}
        />
        <div className={classes.deliveryContainer}>
          <DropdownInput
            label={'Domestic Delivery Estimate'}
            options={jewelryDeliveryEstimate}
            input={this.props.inputs.jewelryDomesticEstimate}
            onChange={this.props.onValueChanged}
          />
          <DropdownInput
            label={'Continental Delivery Estimate'}
            options={jewelryDeliveryEstimate}
            input={this.props.inputs.jewelryContinentalEstimate}
            onChange={this.props.onValueChanged}
          />
          <DropdownInput
            label={'Worldwide Delivery Estimate'}
            options={jewelryDeliveryEstimate}
            input={this.props.inputs.jewelryWorldwideEstimate}
            onChange={this.props.onValueChanged}
          />
        </div>
        <div>
          <label className={classes.label}>Scope of Delivery</label>
          <div className={classes.scope}>
            <CheckboxInput
              label={'With box'}
              onChange={this.props.onCheckboxChanged}
              input={this.props.inputs.jewelryWithBox}
            />
            <CheckboxInput
              label={'With papers'}
              onChange={this.props.onCheckboxChanged}
              input={this.props.inputs.jewelryWithPapers}
            />
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  inputs: {
    jewelryAvailability: state.jewelryForm.jewelryAvailability,
    jewelryDomesticEstimate: state.jewelryForm.jewelryDomesticEstimate,
    jewelryContinentalEstimate: state.jewelryForm.jewelryContinentalEstimate,
    jewelryWorldwideEstimate: state.jewelryForm.jewelryWorldwideEstimate,
    jewelryWithBox: state.jewelryForm.jewelryWithBox,
    jewelryWithPapers: state.jewelryForm.jewelryWithPapers
  }
});

const mapDispatchToProps = (dispatch) => ({
  onValueChanged: (fieldName, value) => dispatch(actions.setJewelryFormField(fieldName, value)),
  onCheckboxChanged: (fieldName) => dispatch(actions.toggleJewelryFormCheckbox(fieldName))
});

export default connect(mapStateToProps, mapDispatchToProps)(JewelryDeliveryInformation);