import React, { Component } from 'react';

import SectionHeader from '../../UI/SectionHeader/SectionHeader';
import DropdownPane from '../../../containers/DropdownPane/DropdownPane';
import WatchBraceletDetails from './WatchBraceletDetails/WatchBraceletDetails';

class OfferAdditionalDetails extends Component {
  render() {
    return (
      <section>
        <SectionHeader>Additional Details:</SectionHeader>
        <div>
          <DropdownPane visible label={'Bracelet/strap'}>
            <WatchBraceletDetails />
          </DropdownPane>
        </div>
      </section>
    )
  }
}

export default OfferAdditionalDetails;