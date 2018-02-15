import React, { Component } from 'react';
import { connect } from 'react-redux';

class OfferOptions extends Component {
  render() {
    return (
      <div>
        <h3>Offer options</h3>
        <p>If you don't indicate availability, delivery, or price suggestion for tihs ad, the default settings will apply.</p>
      </div>
    )
  }
}

export default connect()(OfferOptions);