import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setWatchFormField, toggleWatchFormCheckbox } from '../../../store/actions/index';
import classes from './OfferArticlePrice.css';

import SectionHeader from '../../UI/SectionHeader/SectionHeader';
import NumberInput from '../../UI/Inputs/NumberInput/NumberInput';

class ArticlePrice extends Component {
  render() {
    return (
      <section className={classes.OfferArticlePrice}>
        <SectionHeader>Article price</SectionHeader>
        <div className={classes.price}>
          <NumberInput 
            label={'Price (EUR)'}
            input={this.props.inputs.watchPrice}
            onChange={this.props.onValueChange}
          />
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  inputs: {
    watchPrice: state.watchForm.watchPrice
  }
});

const mapDispatchToProps = (dispatch) => ({
  onValueChange: (fieldName, value) => dispatch(setWatchFormField(fieldName, value)),
  onCheckboxChange: (fieldName) => dispatch(toggleWatchFormCheckbox(fieldName))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePrice);