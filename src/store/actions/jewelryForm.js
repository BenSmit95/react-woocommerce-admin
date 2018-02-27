import * as actionTypes from './actionTypes';

export const setJewelryFormField = (fieldName, value) => ({
  type: actionTypes.SET_JEWELRYFORM_FIELD,
  fieldName,
  value
});