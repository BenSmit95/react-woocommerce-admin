import { SET_WATCHFORM_FIELD, TOGGLE_WATCHFORM_CHECKBOX, TOGGLE_MASS_WATCHFORM_CHECKBOX, SET_WATCH_IMAGE } from '../actions/actionTypes';

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
    },
    watchBraceletColor: {
        value: '',
        error: '',
        controls: {
            whiteOption: true
        },
        name: 'watchBraceletColor'
    },
    watchClasp: {
        value: '',
        error: '',
        controls: {
            whiteOption: true
        },
        name: 'watchClasp'
    },
    watchClaspMaterial: {
        value: '',
        error: '',
        controls: {
            whiteOption: true
        },
        name: 'watchClaspMaterial'
    },
    watchLugWidth: {
        value: '',
        error: '',
        controls: {},
        name: 'watchLugWidth'
    },
    watchBuckleWidth: {
        value: '',
        error: '',
        controls: {},
        name: 'watchBuckleWidth'
    },
    watchBraceletLengthLong: {
        value: '',
        error: '',
        controls: {},
        name: 'watchBraceletLengthLong'
    },
    watchBraceletLengthShort: {
        value: '',
        error: '',
        controls: {},
        name: 'watchBraceletLengthShort'
    },
    watchBraceletThickness: {
        value: '',
        error: '',
        controls: {},
        name: 'watchBraceletThickness'
    },
    watchCaseDiameterLength: {
        value: '',
        error: '',
        controls: {},
        name: 'watchCaseDiameterLength'
    },
    watchCaseDiameterDepth: {
        value: '',
        error: '',
        controls: {},
        name: 'watchCaseDiameterDepth'
    },
    watchCaseThickness: {
        value: '',
        error: '',
        controls: {},
        name: 'watchCaseThickness'
    },
    watchCaseWaterproof: {
        value: '',
        error: '',
        controls: {
            whiteOption: true
        },
        name: 'watchCaseWaterproof'
    },
    watchCaseGlass: {
        value: '',
        error: '',
        controls: {
            whiteOption: true
        },
        name: 'watchCaseGlass'
    },
    watchDial: {
        value: '',
        error: '',
        controls: {
            whiteOption: true
        },
        name: 'watchDial'
    },
    watchDialNumerals: {
        value: '',
        error: '',
        controls: {
            whiteOption: true
        },
        name: 'watchDialNumerals'
    },
    watchMaterialBezel: {
        value: '',
        error: '',
        controls: {
            whiteOption: true
        },
        name: 'watchMaterialBezel'
    },
    watchCaliberMovement: {
        value: '',
        error: '',
        controls: {},
        name: 'watchCaliberMovement'
    },
    watchBaseCaliber: {
        value: '',
        error: '',
        controls: {},
        name: 'watchBaseCaliber'
    },
    watchPowerReserve: {
        value: '',
        error: '',
        controls: {},
        name: 'watchPowerReserve'
    },
    watchJewelCount: {
        value: '',
        error: '',
        controls: {},
        name: 'watchJewelCount'
    },
    watchFrequency: {
        value: '',
        error: '',
        controls: {},
        name: 'watchFrequency'
    },
    watchFrequencyUnit: {
        value: 'A/h',
        error: '',
        controls: {},
        name: 'watchFrequencyUnit'
    },
    watchDescription: {
        value: '',
        error: '',
        controls: {},
        name: 'watchDescription'
    },
    watchFunctions: {},
    watchOthers: {},
    watchImages: {
        value: [],
        error: '',
        controls: {},
        name: 'watchImages'
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