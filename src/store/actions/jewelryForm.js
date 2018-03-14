import * as actionTypes from './actionTypes';
import { postImages } from '../../_secret/auth';

export const resetJewelryform = () => ({
  type: actionTypes.RESET_JEWELRYFORM
});

export const setJewelryFormField = (fieldName, value) => ({
  type: actionTypes.SET_JEWELRYFORM_FIELD,
  fieldName,
  value
});

export const toggleJewelryFormCheckbox = (fieldName) => ({
  type: actionTypes.TOGGLE_JEWELRYFORM_CHECKBOX,
  fieldName
});

export const setJewelryImages = (urls) => ({
  type: actionTypes.SET_JEWELRY_IMAGES,
  urls
});

export const setJewelryRemoveIds = (ids) => ({
  type: actionTypes.SET_JEWELRY_REMOVE_IDS
});

export const startJewelryImageLoading = () => ({
  type: actionTypes.JEWELRYFORM_START_IMAGE_LOADING
});

export const stopJewelryImageLoading = () => ({
  type: actionTypes.JEWELRYFORM_STOP_IMAGE_LOADING
});

export const confirmJewelryImages = (files) => {
  return (dispatch) => {
    dispatch(startJewelryImageLoading());
    postImages(files).then((list) => {
      console.log(list);
      const urlList = [];
      const idList = [];
      list.forEach((listItem) => {
        urlList.push(listItem.url);
        idList.push(listItem.id);
      });
      dispatch(setJewelryRemoveIds(idList));
      dispatch(setJewelryImages(urlList));
      dispatch(stopJewelryImageLoading());
    }).catch((error) => {
      console.log(error);
      dispatch(stopJewelryImageLoading())
    })
  }
}

export const setJewelryImportImages = (images) => ({
  type: actionTypes.SET_JEWELRY_IMPORT_IMAGES,
  images
});

export const startRemoveJewelryImportImage = (id) => {
  return (dispatch) => {
    dispatch(removeJewelryImportImage(id))
  }
}

export const removeJewelryImportImage = (id) => ({
  type: actionTypes.REMOVE_JEWELRY_IMPORT_IMAGE,
  id
});

export const checkJewelryForm = () => {
  return (dispatch, getState) => {
    const jewelryForm = getState().jewelryForm;

    const errors =[];

    for(let key in jewelryForm) {
      if(jewelryForm[key].controls && jewelryForm[key].controls.required && !jewelryForm[key].value.trim()) {
        errors.push({
          fieldName: key,
          message: 'This field is required'
        });
      }
    }
    if(errors.length > 0) {
      errors.forEach((error => dispatch(setJewelryFormError(error.fieldName, error.message))))
    } else {
      dispatch(setJewelryFormValid());
    }
  }
}

export const setJewelryFormValid = () => ({
  type: actionTypes.SET_JEWELRYFORM_VALID
});

export const setJewelryFormError = (fieldName, error) => ({
  type: actionTypes.SET_JEWELRYFORM_ERROR,
  fieldName,
  error
});

export const toggleJewelryFormCategory = (fieldName, parentName) => ({
  type: actionTypes.TOGGLE_JEWELRYFORM_CATEGORY,
  parentName,
  fieldName
});