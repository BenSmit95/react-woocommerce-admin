import React, { Component } from 'react';

import SectionHeader from '../../UI/SectionHeader/SectionHeader';
import DropdownPane from '../../../containers/DropdownPane/DropdownPane';
import WatchBraceletDetails from './WatchBraceletDetails/WatchBraceletDetails';
import WatchCaseDetails from './WatchCaseDetails/WatchCaseDetails';
import WatchCaliberdetails from './WatchCaliberDetails/WatchCaliberdetails';
import WatchFunctions from './WatchFunctions/WatchFunctions';

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
          <DropdownPane
            onClicked={() => this.handlePaneToggle(3)}
            visible={this.state.visiblePane === 3}
            label={'Caliber'}
          >
            <WatchCaliberdetails />
          </DropdownPane>
          <DropdownPane
            onClicked={() => this.handlePaneToggle(4)}
            visible={this.state.visiblePane === 4}
            label={'Functions'}
          >
            <WatchFunctions />
          </DropdownPane>
        </div>
      </section>
    )
  }
}

export default OfferAdditionalDetails;