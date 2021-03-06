import * as actionTypes from "../actions/actionTypes";

const defaultState = {
	jewelry: [],
	loading: false,
	filters: {
		brand: {
			value: '',
			controls: {
				whiteOption: true
			},
			name: 'brand'
		},
		name: {
			value: '',
			controls: {
				whiteOption: true
			},
			name: 'name'
		},
	}
};

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.SET_JEWELRY_LIST_FILTER:
			return {
				...state,
				filters: {
					...state.filters,
					[ action.fieldName ]: {
						...state.filters[ action.fieldName ],
						value: action.value
					}
				}
			}
		case actionTypes.JEWELRYLIST_START_FETCH:
			return {
				...state,
				loading: true
			}
		case actionTypes.SET_JEWELRY_LIST:
			return {
				...state,
				jewelry: action.jewelry,
				loading: false
			}
		case actionTypes.PREPEND_JEWELRY_LIST:
			return {
				...state,
				jewelry: [ action.jewelry ].concat(state.jewelry)
			};
		case actionTypes.REMOVE_JEWELRY:
			return {
				...state,
				jewelry: state.jewelry.filter((jewel) => jewel.id !== action.id)
			};
		default:
			return state;
	}
};

export default reducer;