import { SET_WATCHFORM_FIELD, TOGGLE_WATCHFORM_CHECKBOX } from './actionTypes';


export const setWatchFormField = (fieldName, value) => ({
    type: SET_WATCHFORM_FIELD,
    fieldName,
    value
});

export const toggleWatchFormCheckbox = (fieldName) => ({
    type: TOGGLE_WATCHFORM_CHECKBOX,
    fieldName
});

export const postWatchFormOffer = () => {
    return (dispatch, getState) => {
    }
}