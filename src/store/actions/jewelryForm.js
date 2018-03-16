import * as actionTypes from './actionTypes';
import * as jewelryAttributes from '../../_secret/jewelryAttributes';
import { postImages, postProduct, getProductById, updateProduct } from '../../_secret/auth';
import transformData from '../../utils/data/transformJewelryData';
import { stripHTML } from '../../utils/data/utility';
import { mapJewelryAttribute, mapJewelryCategory } from '../../utils/data/mapJewelry';

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
  type: actionTypes.SET_JEWELRY_REMOVE_IDS,
  ids
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
      console.log(idList);
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

export const jewelryFormStartLoading = () => ({
  type: actionTypes.JEWELRYFORM_START_LOADING
});

export const jewelryFormStopLoading = () => ({
  type: actionTypes.JEWELRYFORM_STOP_LOADING
});

export const postJewelryFormOffer = () => {
  return (dispatch, getState) => {
    dispatch(jewelryFormStartLoading());
      const jewelryForm = {...getState().jewelryForm};
      const data = transformData(jewelryForm);
      postProduct(data, jewelryForm.jewelryImageRemoveList, () => dispatch(jewelryFormSubmitted()));
  }
}

export const jewelryFormSubmitted = () => ({
  type: actionTypes.JEWELRYFORM_SUBMIT_SUCCESS
});

export const updateJewelryFormOffer = (id) => {
  return (dispatch, getState) => {
    dispatch(jewelryFormStartLoading())
    const jewelryForm = {...getState().jewelryForm };
    const data = transformData(jewelryForm);
    updateProduct(data, jewelryForm.jewelryImageRemoveList, id, () => dispatch(jewelryFormSubmitted()));
  }
}

export const fetchJewel = (id) => {
  return (dispatch) => {
    dispatch(resetJewelryform());
    getProductById(id)
    .then((jewel) => {
      jewel.attributes.forEach((attribute) => {
        let fieldName = mapJewelryAttribute(attribute);
        if(fieldName) dispatch(setJewelryFormField(fieldName, attribute.options[0]));
      })
      // Name and price
      dispatch(setJewelryFormField('jewelryPrice', jewel.price));
      dispatch(setJewelryFormField('jewelryName', stripHTML(jewel.name)));

      // Categories
      jewel.categories.forEach((category) => {
        let fieldName = mapJewelryCategory(category);
        if(fieldName) {
          let parentName = category.slug.indexOf('occ') !== -1 ? 'jewelryOccasion' : 'jewelryNew';
          dispatch(toggleJewelryFormCategory(fieldName, parentName));
        }
      });
      // Descriptions
      if(jewel.description) {
        dispatch(setJewelryFormField('jewelryDescription', stripHTML(jewel.description)))
      }
      if(jewel.short_description) {
        dispatch(setJewelryFormField('jewelryInternalCode', stripHTML(jewel.short_description)))
      }

      const scopeAttribute = (jewel.attributes.find((attribute) => (attribute.id === jewelryAttributes.SCOPE_OF_DELIVERY)));
        if (scopeAttribute && scopeAttribute.options.indexOf('With Box') !== -1) dispatch(toggleJewelryFormCheckbox('jewelryWithBox'));
        if (scopeAttribute && scopeAttribute.options.indexOf('With Papers') !== -1) dispatch(toggleJewelryFormCheckbox('jewelryWithPapers'));
      
      const importedImages = (jewel.images.map((image) => ({
        url: image.src,
        id: image.id
      })));
      // Then add to state
      dispatch(setJewelryImportImages(importedImages));

      // Set the ID's to the remove list, since Woocommerce copies images on submit
      dispatch(setJewelryRemoveIds(importedImages.map((image) => image.id)));
    });
  }
}