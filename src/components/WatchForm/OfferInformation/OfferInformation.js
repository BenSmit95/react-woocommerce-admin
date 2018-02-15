import React from 'react';
import { connect } from 'react-redux';
import { setWatchFormField } from '../../../store/actions/index';

import { watchTypes, watchBrands, watchMovement } from '../../../_secret/watchFormData';

import DropdownInput from '../DropdownInput/DropdownInput';
import TextInput from '../TextInput/TextInput';

const OfferInformation = (props) => (
    <section>
        <h3>Offer Information</h3>
        <DropdownInput
            label={'Type of watch'}
            options={watchTypes}
            required
            name="watchType"
            onChange={props.onValueChange}
            value={props.values.watchType}
        />
        <hr />
        <div>
            <DropdownInput
                label={'Brand'}
                options={watchBrands}
                required
                whiteOption
                name={'watchBrand'}
                onChange={props.onValueChange}
                value={props.values.watchBrand}
            />
            <TextInput 
                label={'Model'}
                required
            />
        </div>
        <div>
            <DropdownInput 
                label={'Movement'}
                options={watchMovement}
                whiteOption
            />
        </div>
    </section>
)

const mapStateToProps = (state) => ({
    values: {
        watchType: state.watchForm.watchType.value,
        watchBrand: state.watchForm.watchBrand.value
    }
});

const mapDispatchToProps = (dispatch) => ({
    onValueChange: (fieldName, value) => dispatch(setWatchFormField(fieldName, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(OfferInformation);