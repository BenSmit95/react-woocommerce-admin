import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './JewelryDeliveryInformation.css';
import { jewelryDeliveryEstimate, jewelryAvailability } from '../../../_secret/jewelryFormData';
import * as actions from '../../../store/actions/index';

import SectionHeader from '../../UI/SectionHeader/SectionHeader';
import DropdownInput from '../../UI/Inputs/DropdownInput/DropdownInput';

class JewelryDeliveryInformation extends Component {
  render() {
    return (
      <section>
          <SectionHeader>Offer Delivery Information</SectionHeader>
          <div>
            <DropdownInput 
              label={'Availability'}
              options={jewelryAvailability}
              input={this.props.inputs.jewelryAvailability}
              onChange={this.props.onValueChanged}
            />
          </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  inputs: {
    jewelryAvailability: state.jewelryForm.jewelryAvailability
  }
});

const mapDispatchToProps = (dispatch) => ({
  onValueChanged: (fieldName, value) => dispatch(actions.setJewelryFormField(fieldName, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(JewelryDeliveryInformation);