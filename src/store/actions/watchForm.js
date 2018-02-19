import { SET_WATCHFORM_FIELD, TOGGLE_WATCHFORM_CHECKBOX, TOGGLE_MASS_WATCHFORM_CHECKBOX, SET_WATCH_IMAGE } from './actionTypes';
import transformData from '../../utils/data/transformData';
import { postProduct } from '../../_secret/auth';

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

export const setWatchImage = (files) => {
    return {
        type: SET_WATCH_IMAGE,
        files
    }
}

export const postWatchFormOffer = () => {
    return (dispatch, getState) => {
        const watchForm = getState().watchForm;
        const data = transformData(watchForm);
        postProduct(data);
    }
}