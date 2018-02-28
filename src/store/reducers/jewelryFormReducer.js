import defaultState from './defaultState/jewelryForm'
import * as actionTypes from '../actions/actionTypes';

const jewelryFormReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_JEWELRYFORM_FIELD:
      return {
        ...state,
        [action.fieldName]: {
          ...state[action.fieldName],
          value: action.value
        }
      }
    case actionTypes.TOGGLE_JEWELRYFORM_CHECKBOX:
      return {
        ...state,
        [action.fieldName]: {
          ...state[action.fieldName],
          value: !state[action.fieldName].value
        }
      }
    case actionTypes.SET_JEWELRY_IMAGES:
      return {
        ...state,
        jewelryImages: {
          ...state.jewelryImages,
          value: action.urls
        }
      }
    case actionTypes.SET_REMOVE_IDS:
      return {
        ...state,
        jewelryImageRemoveList: [
          ...state.jewelryImageRemoveList,
          ...action.ids
        ]
      }
    case actionTypes.JEWELRYFORM_START_IMAGE_LOADING:
      return {
        ...state,
        imageLoading: true
      }
    case actionTypes.JEWELRYFORM_STOP_IMAGE_LOADING:
      return {
        ...state,
        imageLoading: false
      }
    case actionTypes.SET_JEWELRY_IMPORT_IMAGES:
      return {
        ...state,
        jewelryImportImages: action.images
      }
    case actionTypes.REMOVE_JEWELRY_IMPORT_IMAGE:
      return {
        ...state,
        jewelryImportImages: state.jewelryImportImages.filter((image) => action.id !== image.id)
      }
    case actionTypes.RESET_JEWELRYFORM:
      return defaultState;
    default: return state;
  }
};

export default jewelryFormReducer;