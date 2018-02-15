import { SET_WATCHFORM_FIELD } from './actionTypes';


export const setWatchFormField = (fieldName, value) => ({
    type: SET_WATCHFORM_FIELD,
    fieldName,
    value
});