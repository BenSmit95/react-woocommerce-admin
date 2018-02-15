import React, { Component } from 'react';
import { connect } from 'react-redux';

class ArticlePrice extends Component {
  render() {
    return (
      <div>
        ArticlePrice Component
      </div>
    )
  }
}

export default connect()(ArticlePrice);