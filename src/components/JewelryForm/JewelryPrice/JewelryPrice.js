import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import classes from './JewelryPrice.css';

import SectionHeader from '../../UI/SectionHeader/SectionHeader';
import NumberInput from '../../UI/Inputs/NumberInput/NumberInput';

class JewelryPrice extends Component {
  render() {
    return (
      <section className={classes.JewelryPrice}>
        <SectionHeader>Offer Price</SectionHeader>
        <NumberInput 
          label={'Price'}
          input={this.props.jewelryPrice}
          onChange={this.props.onValueChange}
        />
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  jewelryPrice: state.jewelryForm.jewelryPrice
});

const mapDispatchToProps = (dispatch) => ({
  onValueChange: (fieldName, value) => dispatch(actions.setJewelryFormField(fieldName, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(JewelryPrice);