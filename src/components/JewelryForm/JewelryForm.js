import React, { Component } from 'react';
import classes from './JewelryForm.css';

import JewelryPrice from './JewelryPrice/JewelryPrice';
import JewelryBasicInformation from './JewelryBasicInformation/JewelryBasicInformation';
import JewelryMeasurements from './JewelryMeasurements/JewelryMeasurements';
import JewelryDetails from './JewelryDetails/JewelryDetails';
import JewelryDeliveryInformation from './JewelryDeliveryInformation/JewelryDeliveryInformation';
import Button from '../UI/Button/Button';
import JewelryDescription from './JewelryDescription/JewelryDescription';
import JewelryInternalInformation from './JewelryInternalInformation/JewelryInternalInformation';
import JewelryPictures from './JewelryPictures/JewelryPictures';

class JewelryForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <form className={classes.JewelryForm}>
        <JewelryBasicInformation />
        <hr />
        <JewelryDescription />
        <hr />
        <JewelryPrice />
        <hr />
        <JewelryDeliveryInformation />
        <hr />
        <JewelryDetails />
        <hr />
        <JewelryMeasurements />
        <hr />
        <JewelryInternalInformation />
        <hr />
        <JewelryPictures />
        <hr />
        <Button
          onClick={this.handleSubmit}
        >
          Save Offer
        </Button>
      </form>
    )
  }
}

export default JewelryForm;