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