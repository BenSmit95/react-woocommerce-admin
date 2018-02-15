import React from 'react';

import { watchTypes, watchBrands } from '../../../_secret/watchFormData';

import DropdownInput from '../DropdownInput/DropdownInput'

const OfferInformation = (props) => (
    <div>
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
        </div>
    </div>
)

export default OfferInformation;