import React, { Component } from 'react';

import SectionHeader from '../../UI/SectionHeader/SectionHeader';
import DropdownPane from '../../../containers/DropdownPane/DropdownPane';
import WatchBraceletDetails from './WatchBraceletDetails/WatchBraceletDetails';
import WatchCaseDetails from './WatchCaseDetails/WatchCaseDetails';

class OfferAdditionalDetails extends Component {
  state = {
    visiblePane: undefined
  }

  handlePaneToggle = (num) => {
    this.setState((prevState) => ({
      visiblePane: (prevState.visiblePane === num ? undefined : num)
    }));
  }

  render() {
    return (
      <section>
        <SectionHeader>Additional Details:</SectionHeader>
        <div>
          <DropdownPane 
            onClicked={() => this.handlePaneToggle(1)}
            visible={this.state.visiblePane === 1} 
            label={'Bracelet/strap'}
          >
            <WatchBraceletDetails />
          </DropdownPane>
          <DropdownPane
            onClicked={() => this.handlePaneToggle(2)}
            visible={this.state.visiblePane === 2}
            label={'Case'}
          >
            <WatchCaseDetails />
          </DropdownPane>
        </div>
      </section>
    )
  }
}

export default OfferAdditionalDetails;