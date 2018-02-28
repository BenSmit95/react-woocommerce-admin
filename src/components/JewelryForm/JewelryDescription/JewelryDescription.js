import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './JewelryDescription.css';
import * as actions from '../../../store/actions/index';

import SectionHeader from '../../UI/SectionHeader/SectionHeader';
import TextAreaInput from '../../UI/Inputs/TextAreaInput/TextAreaInput';
import TextInput from '../../UI/Inputs/TextInput/TextInput';

class JewelryDescription extends Component {
  render() {
    return (
      <section>
        <SectionHeader>Offer Description</SectionHeader>
        <TextAreaInput 
          label={'Describe the offer in detail'}
          onChange={this.props.onValueChanged}
          input={this.props.inputs.jewelryDescription}
        />
      </section>
    )
  }
};

const mapStateToProps = (state) => ({
  inputs: {
    jewelryDescription: state.jewelryForm.jewelryDescription,
    jewelryInternalCode: state.jewelryForm.jewelryInternalCode,
    jewelryInternalComment: state.jewelryForm.jewelryInternalComment
  }
});

const mapDispatchToProps = (dispatch) => ({
  onValueChanged: (fieldName, value) => dispatch(actions.setJewelryFormField(fieldName, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(JewelryDescription);