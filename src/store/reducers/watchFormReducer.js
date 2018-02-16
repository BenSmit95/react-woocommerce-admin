import { SET_WATCHFORM_FIELD, TOGGLE_WATCHFORM_CHECKBOX } from '../actions/actionTypes';

const defaultState = {
    watchType: {
        value: 'Watch',
        error: '',
        controls: {
            required: true,
        },
        name: 'watchType'
    },
    watchBrand: {
        value: '',
        error: '',
        controls: {
            required: true,
            whiteOption: true,
        },
        name: 'watchBrand'
    },
    watchModel: {
        value: '',
        error: '',
        controls: {
            required: true,
        },
        name: 'watchModel',
    },
    watchMovement: {
        value: '',
        error: '',
        controls: {
            whiteOption: true,
        },
        name: 'watchMovement',
    },
    watchCaseMaterial: {
        value: '',
        error: '',
        controls: {
            whiteOption: true,
        },
        name: 'watchCaseMaterial',
    },
    watchBraceletMaterial: {
        value: '',
        error: '',
        controls: {
            whiteOption: true,
        },
        name: 'watchBraceletMaterial'
    },
    watchGender: {
        value: '',
        error: '',
        controls: {
            whiteOption: true,
        },
        name: 'watchGender',
    },
    watchCondition: {
        value: '',
        error: '',
        controls: {
            whiteOption: true,
        },
        name: 'watchCondition'
    },
    watchConditionNew: {
        value: false,
        error: '',
        controls: {},
        name: 'watchConditionNew'
    },
    watchYear: {
        value: '',
        error: '',
        controls: {},
        name:'watchYear',
    },
    watchWithBox: {
        value: false,
        error: '',
        controls: {},
        name: 'watchWithBox',
    },
    watchWithPapers: {
        value: false,
        error: '',
        controls: {},
        name: 'watchWithPapers'
    },
    watchAvailability: {
        value: 'Available now',
        error: '',
        controls: {},
        name: 'watchAvailability'
    },
    watchSeveralItemsAvailable: {
        value: false,
        error: '',
        controls: {},
        name: "watchSeveralItemsAvailable"
    },
    watchDomesticEstimate: {
        value: '2-6 days',
        error: '',
        controls: {},
        name: 'watchDomesticEstimate'
    },
    watchContinentalEstimate: {
        value: '1-2 weeks',
        error: '',
        controls: {},
        name: 'watchContinentalEstimate'
    },
    watchWorldwideEstimate: {
        value: '2-3 weeks',
        error: '',
        controls: {},
        name: 'watchWorldwideEstimate'
    },
    watchPrice: {
        value: '',
        error: '',
        controls: { required: true },
        name: 'watchPrice'
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
        case TOGGLE_WATCHFORM_CHECKBOX: 
            return {
                ...state,
                [action.fieldName]: {
                    ...state[action.fieldName],
                    value: !state[action.fieldName].value
                }
            }
        default:
            return state;
    }
}

export default watchFormReducer;