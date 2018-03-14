import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import { 
  jewelryCategoryNew,
  jewelryCategoryOccasion
} from '../../../_secret/jewelryFormData';

import SectionHeader from '../../UI/SectionHeader/SectionHeader';
import JewelryCategoryInput from './JewelryCategoryInput/JewelryCategoryInput';
import MassCheckboxInput from '../../UI/Inputs/MassCheckboxInput/MassCheckboxInput';

class JewelryCategories extends Component {

  render() {
    const checkboxesNew = jewelryCategoryNew.map((category, index) => (
      <MassCheckboxInput
        key={`jewelryCategoryNew${index}`}
        label={category.label}
        name={category.name}
        fieldName={'jewelryNew'}
        onCheckboxToggle={this.props.onChange}
        checked={this.props.inputs.jewelryNew[category.name]}
      />
    ));
    const checkboxesOccasion = jewelryCategoryOccasion.map((category, index) => (
      <MassCheckboxInput
        key={`jewelryCategoryOcc${index}`}
        label={category.label}
        name={category.name}
        fieldName={'jewelryOccasion'}
        onCheckboxToggle={this.props.onChange}
        checked={this.props.inputs.jewelryOccasion[category.name]}
      />
    ));
    return (
      <section>
        <SectionHeader>Categories</SectionHeader>
        <div>
          {checkboxesOccasion}
        </div>
        <div>
          {checkboxesNew}
        </div>
      </section>
    )
  }
};

const mapStateToProps = (state) => ({
  inputs: state.jewelryForm.jewelryCategories
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (parentName, fieldName) => dispatch(actions.toggleJewelryFormCategory(fieldName, parentName))
});

export default connect(mapStateToProps, mapDispatchToProps)(JewelryCategories);