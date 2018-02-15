import React, { Component } from 'react';
import { connect } from 'react-redux';

class OfferAdditionalDetails extends Component {
  render() {
    return (
      <div>
        <h3>Additional Details:</h3>
      </div>
    )
  }
}

export default connect()(OfferAdditionalDetails);