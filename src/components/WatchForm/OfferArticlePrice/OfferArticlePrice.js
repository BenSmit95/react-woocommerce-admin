import React, { Component } from 'react';
import { connect } from 'react-redux';

import SectionHeader from '../../UI/SectionHeader/SectionHeader';

class ArticlePrice extends Component {
  render() {
    return (
      <section>
        <SectionHeader>Article price</SectionHeader>
        <input type='number' />
      </section>
    )
  }
}

export default connect()(ArticlePrice);