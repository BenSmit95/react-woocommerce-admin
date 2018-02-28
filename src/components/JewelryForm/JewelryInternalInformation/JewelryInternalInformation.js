import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import classes from './JewelryInternalInformation.css';

import SectionHeader from '../../UI/SectionHeader/SectionHeader';
import TextInput from '../../UI/Inputs/TextInput/TextInput';
import TextAreaInput from '../../UI/Inputs/TextAreaInput/TextAreaInput';

class JewelryInternalInformation extends Component {
  render() {
    return (
      <section>
        <SectionHeader>Internal Information</SectionHeader>
        <TextInput
          label={'Internal code'}
          onChange={this.props.onValueChanged}
          input={this.props.inputs.jewelryInternalCode}
        />
        <TextAreaInput
          label={'Internal comment (will stay hidden)'}
          onChange={this.props.onValueChanged}
          input={this.props.inputs.jewelryInternalComment}
        />
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  inputs: {
    jewelryInternalCode: state.jewelryForm.jewelryInternalCode,
    jewelryInternalComment: state.jewelryForm.jewelryInternalComment
  }
});

const mapDispatchToProps = (dispatch) => ({
  onValueChanged: (fieldName, value) => dispatch(actions.setJewelryFormField(fieldName, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(JewelryInternalInformation);