import React, { Component } from 'react';
import { connect } from 'react-redux';
import { } from '../../../../_secret/watchFormData';

import DropdownInput from '../../Inputs/DropdownInput';

class BraceletDetails extends Component {
  render() {
    return (
      <div>
        <div>
          <DropdownInput />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default BraceletDetails;