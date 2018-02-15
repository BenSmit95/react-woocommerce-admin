import { SET_WATCHFORM_FIELD } from '../actions/actionTypes';

const defaultState = {
    watchType: {
        value: 'Watch'
    },
    watchBrand: {
        value: ''
    }
}

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
        default:
            return state;
    }
}

export default watchFormReducer;