import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

import SectionHeader from '../../UI/SectionHeader/SectionHeader';
import TextInput from '../../UI/Inputs/TextInput/TextInput';
import TextAreaInput from '../../UI/Inputs/TextAreaInput/TextAreaInput';

class OfferStatus extends Component {
  render() {
    return (
      <section>
        <SectionHeader>Status</SectionHeader>
        <TextInput 
          label={'Internal code:'}
          input={this.props.inputs.watchInternalCode}
          onChange={this.props.onValueChange}
        />
        <TextAreaInput 
          label={'Internal comment (will not be displayed):'}
          input={this.props.inputs.watchInternalComment}
          onChange={this.props.onValueChange}
        />
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  inputs: {
    watchInternalCode: state.watchForm.watchInternalCode,
    watchInternalComment: state.watchForm.watchInternalComment
  }
});

const mapDispatchToProps = (dispatch) => ({
  onValueChange: (fieldName, value) => dispatch(actions.setWatchFormField(fieldName, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(OfferStatus);