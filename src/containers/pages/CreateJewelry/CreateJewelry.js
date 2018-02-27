import React, { Component } from 'react';
import classes from './CreateJewelry.css';

import PageHeader from '../../../components/UI/PageHeader/PageHeader';
import JewelryForm from '../../../components/JewelryForm/JewelryForm';

class CreateJewelry extends Component {
  render() {
    return (
      <div className={classes.CreateJewelry}>
        <PageHeader>Create a new Offer (Jewelry)</PageHeader>
        <JewelryForm />
      </div>
    )
  }
};

export default CreateJewelry;