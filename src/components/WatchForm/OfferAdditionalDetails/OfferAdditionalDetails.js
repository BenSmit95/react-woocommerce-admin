import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setWatchFormField } from '../../../store/actions/watchForm';
import classes from './OfferAdditionalDetails.css';

import SectionHeader from '../../UI/SectionHeader/SectionHeader';
import DropdownPane from '../../../containers/DropdownPane/DropdownPane';
import WatchBraceletDetails from './WatchBraceletDetails/WatchBraceletDetails';
import WatchCaseDetails from './WatchCaseDetails/WatchCaseDetails';
import WatchCaliberdetails from './WatchCaliberDetails/WatchCaliberdetails';
import WatchFunctions from './WatchFunctions/WatchFunctions';
import WatchOthers from './WatchOthers/WatchOthers';
import TextAreaInput from '../../UI/Inputs/TextAreaInput/TextAreaInput';

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
      <section className={classes.OfferAdditionalDetails}>
        <SectionHeader>Additional Details:</SectionHeader>
        <div className={classes.dropdowns}>
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
          <DropdownPane
            onClicked={() => this.handlePaneToggle(5)}
            visible={this.state.visiblePane === 5}
            label={'Others'}
          >
            <WatchOthers />
          </DropdownPane>
        </div>
        <div className={classes.textinput}>
          <TextAreaInput
            label={'Please describe the item in detail'}
            input={this.props.watchDescription}
            onChange={this.props.onValueChange}
          />
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  watchDescription: state.watchForm.watchDescription
});

const mapDispatchToProps = (dispatch) => ({
  onValueChange: (fieldName, value) => dispatch(setWatchFormField(fieldName, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(OfferAdditionalDetails);