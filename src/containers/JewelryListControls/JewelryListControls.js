import React, { Component } from 'react';
import { connect } from 'react-redux';
import { jewelryBrands } from '../../_secret/jewelryFormData'
import * as actions from '../../store/actions';
import classes from './JewelryListControls.css';

import Button from '../../components/UI/Button/Button';
import SectionHeader from '../../components/UI/SectionHeader/SectionHeader';
import VariableInput from '../../components/UI/Inputs/VariableInput/VariableInput';
import TextInput from '../../components/UI/Inputs/TextInput/TextInput';

class JewelryListControls extends Component {
  render() {
    return (
      <div className={classes.JewelryListControls}>
        <SectionHeader>Filter</SectionHeader>
        <div className={classes.inputContainer}>
          <VariableInput 
            label={'Brand'}
            options={jewelryBrands}
            input={this.props.filters.brand}
            onChange={this.props.onFiltersChanged}
          />
          <TextInput 
            label={'Name'}
            input={this.props.filters.name}
            onChange={this.props.onFiltersChanged}
          />
        </div>

        <Button
          onClick={this.props.onFetchJewelry}
        >
          Fetch Jewelry
        </Button>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  filters: {
    brand: state.jewelryList.filters.brand,
    name: state.jewelryList.filters.name
  }
});

const mapDispatchToProps = (dispatch) => ({
  onFetchJewelry: () => dispatch(actions.fetchJewelry()),
  onFiltersChanged: (fieldName, value) => dispatch(actions.setJewelryListFilter(fieldName, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(JewelryListControls);