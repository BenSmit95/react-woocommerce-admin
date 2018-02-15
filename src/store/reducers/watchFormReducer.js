import { SET_WATCHFORM_FIELD, SET_WATCHFORM_CHECKBOX } from '../actions/actionTypes';

const defaultState = {
    watchType: {
        value: 'Watch'
    },
    watchBrand: {
        value: ''
    },
    watchModel: {
        value: ''
    },
    watchMovement: {
        value: ''
    },
    watchCaseMaterial: {
        value: ''
    },
    watchBraceletMaterial: {
        value: ''
    },
    watchGender: {
        value: ''
    },
    watchCondition: {
        value: '',
        new: false
    },
    watchYear: {
        value: ''
    },
    watchScopeOfDelivery: {
        withBox: false,
        withPapers: false
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
        case SET_WATCHFORM_CHECKBOX: 
            return {
                ...state,
                [action.target.field]: {
                    ...state[action.target.field],
                    [action.target.key]: !state[action.target.field][action.target.key]
                }
            }
        default:
            return state;
    }
}

export default watchFormReducer;