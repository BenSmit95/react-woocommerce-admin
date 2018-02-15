import React, { Component } from 'react';
import classes from './OfferInformation.css';
import { connect } from 'react-redux';
import { setWatchFormField, setWatchFormCheckbox } from '../../../store/actions/index';

import { watchTypes, watchBrands, watchMovement, watchCaseMaterial, watchBraceletMaterial, watchGender, watchCondition } from '../../../_secret/watchFormData';

import DropdownInput from '../DropdownInput/DropdownInput';
import TextInput from '../TextInput/TextInput';
import CheckboxInput from '../CheckboxInput/CheckboxInput';

class OfferInformation extends Component {
    state = {
        brandNotListed: false
    }
    render() {

        let brandInput = (
            <DropdownInput
                label={'Brand'}
                options={watchBrands}
                required
                whiteOption
                name={'watchBrand'}
                onChange={this.props.onValueChange}
                value={this.props.values.watchBrand}
            />
        )

        if (this.state.brandNotListed) {
            brandInput = (
                <TextInput 
                    label={'Brand'}
                    required
                    name={'watchBrand'}
                    onChange={this.props.onValueChange}
                    value={this.props.values.watchBrand}
                />

            )
        }

        return (
            <section className={classes.OfferInformation}>
                <div className={classes.row1}>
                    <h3>Offer Information</h3>
                    <DropdownInput
                        label={'Type of watch'}
                        options={watchTypes}
                        required
                        name="watchType"
                        onChange={this.props.onValueChange}
                        value={this.props.values.watchType}
                    />
                </div>
                <hr />
                <div className={classes.row3input}>
                    {brandInput}
                    <TextInput
                        label={'Model'}
                        name={'watchModel'}
                        onChange={this.props.onValueChange}
                        required
                        value={this.props.values.watchModel}
                    />
                </div>
                <p className={classes.brandNotListed}onClick={() => this.setState({ brandNotListed: true })}>Make/brand not listed?</p>
                <div className={classes.row3input}>
                    <DropdownInput
                        label={'Movement'}
                        name={'watchMovement'}
                        options={watchMovement}
                        onChange={this.props.onValueChange}
                        whiteOption
                        value={this.props.values.watchMovement}
                    />
                    <DropdownInput
                        label={'Case material'}
                        name={'watchCaseMaterial'}
                        options={watchCaseMaterial}
                        onChange={this.props.onValueChange}
                        whiteOption
                        value={this.props.values.watchCaseMaterial}
                    />
                    <DropdownInput
                        label={'Bracelet material'}
                        name={'watchBraceletMaterial'}
                        options={watchBraceletMaterial}
                        onChange={this.props.onValueChange}
                        whiteOption
                        value={this.props.values.watchBraceletMaterial}
                    />
                </div>
                <div className={classes.row3input}>
                    <DropdownInput
                        label={'Gender'}
                        name={'watchGender'}
                        options={watchGender}
                        onChange={this.props.onValueChange}
                        whiteOption
                        value={this.props.values.watchGender}
                    />
                </div>
                <hr />
                <div className={classes.row3input}>
                    <DropdownInput
                        label={'Condition'}
                        name={'watchCondition'}
                        options={watchCondition}
                        onChange={this.props.onValueChange}
                        whiteOption
                        required
                        value={this.props.values.watchCondition}
                    />
                    <TextInput
                        label={'Year'}
                        name={'watchYear'}
                        onChange={this.props.onValueChange}
                        value={this.props.values.watchYear}
                    />
                </div>
                <CheckboxInput
                    label={'New'}
                    target={{
                        field: 'watchCondition',
                        key: 'new'
                    }}
                    checked={this.props.watchConditionNew}
                    onChange={this.props.onCheckBoxChange}
                />
                <div className={classes.checkboxContainer}>
                    <label>Scope of delivery</label>
                    <div className={classes.checkboxes}>
                        <CheckboxInput
                            label={'With box'}
                            target={{
                                field: 'watchScopeOfDelivery',
                                key: 'withBox'
                            }}
                            checked={this.props.watchWithBox}
                            onChange={this.props.onCheckBoxChange}
                        />
                        <CheckboxInput
                            label={'With papers'}
                            target={{
                                field: 'watchScopeOfDelivery',
                                key: 'withPapers'
                            }}
                            checked={this.props.watchWithPapers}
                            onChange={this.props.onCheckBoxChange}
                        />
                    </div>
                </div>
            </section>
        )

    }
}

const mapStateToProps = (state) => ({
    values: {
        watchType: state.watchForm.watchType.value,
        watchBrand: state.watchForm.watchBrand.value,
        watchModel: state.watchForm.watchModel.value,
        watchMovement: state.watchForm.watchMovement.value,
        watchCaseMaterial: state.watchForm.watchCaseMaterial.value,
        watchBraceletMaterial: state.watchForm.watchBraceletMaterial.value,
        watchGender: state.watchForm.watchBraceletMaterial.value,
        watchCondition: state.watchForm.watchCondition.value,
        watchConditionNew: state.watchForm.watchCondition.new,
        watchYear: state.watchForm.watchYear.value,
        watchWithBox: state.watchForm.watchScopeOfDelivery.withBox,
        watchWithPapers: state.watchForm.watchScopeOfDelivery.withPapers
    }
});

const mapDispatchToProps = (dispatch) => ({
    onValueChange: (fieldName, value) => dispatch(setWatchFormField(fieldName, value)),
    onCheckBoxChange: (target) => dispatch(setWatchFormCheckbox(target))
});

export default connect(mapStateToProps, mapDispatchToProps)(OfferInformation);