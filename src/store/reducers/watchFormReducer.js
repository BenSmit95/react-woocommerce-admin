import * as actionTypes from '../actions/actionTypes';
import { defaultState } from './defaultState/watchForm';

const watchFormReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.SET_WATCHFORM_FIELD:
            return {
                ...state,
                [action.fieldName]: {
                    ...state[action.fieldName],
                    value: action.value
                }
            }
        case actionTypes.TOGGLE_WATCHFORM_CHECKBOX:
            return {
                ...state,
                [action.fieldName]: {
                    ...state[action.fieldName],
                    value: !state[action.fieldName].value
                }
            }
        case actionTypes.TOGGLE_MASS_WATCHFORM_CHECKBOX:
            return {
                ...state,
                [action.fieldName]: {
                    ...state[action.fieldName],
                    [action.name]: {
                        ...state[action.fieldName][action.name],
                        value: (state[action.fieldName][action.name].value ? false : true),
                    }
                }
            }
        case actionTypes.SET_WATCH_IMAGES:
            return {
                ...state,
                watchImages: {
                    ...state.watchImages,
                    value: action.urls
                }
            }
        case actionTypes.SET_REMOVE_IDS:
            return {
                ...state,
                watchImageRemoveList: [
                    ...state.watchImageRemoveList,
                    ...action.ids
                ]
            }
        case actionTypes.WATCHFORM_START_IMAGE_LOADING:
            return {
                ...state,
                imageLoading: true,
            };
        case actionTypes.WATCHFORM_STOP_IMAGE_LOADING:
            return {
                ...state,
                imageLoading: false,
            }
        case actionTypes.SET_IMPORT_IMAGES:
            return {
                ...state,
                watchImportImages: action.images
            }
        case actionTypes.RESET_WATCHFORM:
            return defaultState;
        default:
            return state;
    }
}

export default watchFormReducer;