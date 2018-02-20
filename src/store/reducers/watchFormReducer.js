import { SET_WATCHFORM_FIELD, TOGGLE_WATCHFORM_CHECKBOX, TOGGLE_MASS_WATCHFORM_CHECKBOX, SET_WATCH_IMAGE } from '../actions/actionTypes';
import { defaultState } from './defaultState/watchForm';

const watchFormReducer = (state = defaultState, action) => {
    switch(action.type) {
        case SET_WATCHFORM_FIELD:
            return {
                ...state,
                [action.fieldName]: {
                    ...state[action.fieldName],
                    value: action.value
                }
            }
        case TOGGLE_WATCHFORM_CHECKBOX: 
            return {
                ...state,
                [action.fieldName]: {
                    ...state[action.fieldName],
                    value: !state[action.fieldName].value
                }
            }
        case TOGGLE_MASS_WATCHFORM_CHECKBOX:
            return {
                ...state,
                [action.fieldName]: {
                    ...state[action.fieldName],
                    [action.attribute]: (state[action.fieldName][action.attribute] ? false : true)
                }
            }
        case SET_WATCH_IMAGE:
            return {
                ...state,
                watchImages: {
                    ...state.watchImages,
                    value: action.files
                }
            }
        default:
            return state;
    }
}

export default watchFormReducer;