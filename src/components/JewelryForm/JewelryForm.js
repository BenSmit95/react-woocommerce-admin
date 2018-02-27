import React, { Component } from 'react';
import classes from './JewelryForm.css';

import JewelryBasicInformation from './JewelryBasicInformation/JewelryBasicInformation';
import Button from '../UI/Button/Button';

class JewelryForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <form className={classes.JewelryForm}>
        <JewelryBasicInformation />
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