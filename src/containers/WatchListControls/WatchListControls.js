import React, { Component } from 'react';
import { connect } from 'react-redux';
import { watchBrands } from '../../_secret/watchFormData';
import * as actions from '../../store/actions/index';
import classes from './WatchListControls.css';

import SectionHeader from '../../components/UI/SectionHeader/SectionHeader';
import Button from '../../components/UI/Button/Button';
import VariableInput from '../../components/UI/Inputs/VariableInput/VariableInput';
import TextInput from '../../components/UI/Inputs/TextInput/TextInput';
import { setWatchListFilter } from '../../store/actions/watchList';

class WatchListControls extends Component {
  // state = {
  //   brand: {
  //     value: '',
  //     name: 'brand',
  //     controls: {
  //       whiteOption: true
  //     }
  //   }
  // }

  // onInputChanged = (inputName, value) => {
  //   this.setState({
  //     [inputName]: {
  //       ...this.state[inputName],
  //       value
  //     }
  //   });
  // }

  render() {
    return (
      <div className={classes.WatchListControls}>
        <SectionHeader>Filter</SectionHeader>
        <div className={classes.inputContainer}>
          <VariableInput 
            label={'Brand'}
            options={ watchBrands }
            input={this.props.filters.brand}
            onChange={this.props.onFilterChanged}
          />

          <TextInput 
            label={'Model'}
            input={this.props.filters.model}
            onChange={this.props.onFilterChanged}
          />

          <TextInput
            label={'Ref'}
            input={this.props.filters.ref}
            onChange={this.props.onFilterChanged}
          />
        </div>

        <Button
          onClick={this.props.onFetchWatches}
        >
          Fetch Watches
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: {
    brand: state.watchList.filters.brand,
    model: state.watchList.filters.model,
    ref: state.watchList.filters.ref
  }
});

const mapDispatchToProps = (dispatch) => ({
  onFetchWatches: () => dispatch(actions.fetchWatches()),
  onFilterChanged: (fieldName, value) => dispatch(setWatchListFilter(fieldName, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(WatchListControls);