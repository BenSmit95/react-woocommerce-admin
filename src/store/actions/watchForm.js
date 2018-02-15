import { SET_WATCHFORM_FIELD, SET_WATCHFORM_CHECKBOX } from './actionTypes';


export const setWatchFormField = (fieldName, value) => ({
    type: SET_WATCHFORM_FIELD,
    fieldName,
    value
});

export const setWatchFormCheckbox = (target) => ({
    type: SET_WATCHFORM_CHECKBOX,
    target
})