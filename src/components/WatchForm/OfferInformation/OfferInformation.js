import React from 'react';

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
        />
        <hr />
        <div>
            <DropdownInput
                label={'Brand'}
                options={watchBrands}
                required
                whiteOption
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

export default OfferInformation;