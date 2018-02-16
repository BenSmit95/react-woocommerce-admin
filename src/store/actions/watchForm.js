import { SET_WATCHFORM_FIELD, TOGGLE_WATCHFORM_CHECKBOX, TOGGLE_MASS_WATCHFORM_CHECKBOX } from './actionTypes';


export const setWatchFormField = (fieldName, value) => ({
    type: SET_WATCHFORM_FIELD,
    fieldName,
    value
});

export const toggleWatchFormCheckbox = (fieldName) => ({
    type: TOGGLE_WATCHFORM_CHECKBOX,
    fieldName
});

export const toggleMassWatchFormCheckbox = (fieldName, attribute) => ({
    type: TOGGLE_MASS_WATCHFORM_CHECKBOX,
    fieldName,
    attribute
})

export const postWatchFormOffer = () => {
    return (dispatch, getState) => {
    }
}