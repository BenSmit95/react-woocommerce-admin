import * as actionTypes from '../actions/actionTypes';
import { defaultState } from './defaultState/watchForm';

const watchFormReducer = (state = defaultState, action) => {
    switch(action.type) {
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
                    [action.attribute]: (state[action.fieldName][action.attribute] ? false : true)
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
                    action.ids
                ]
            }
        case actionTypes.START_LOADING:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.STOP_LOADING:
            return {
                ...state,
                loading: false,
            }
        default:
            return state;
    }
}

export default watchFormReducer;