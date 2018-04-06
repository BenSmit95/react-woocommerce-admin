import defaultState from './defaultState/jewelryForm'
import * as actionTypes from '../actions/actionTypes';

const jewelryFormReducer = (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.SET_JEWELRYFORM_FIELD:
			return {
				...state,
				[ action.fieldName ]: {
					...state[ action.fieldName ],
					value: action.value
				},
				valid: false
			};
		case actionTypes.TOGGLE_JEWELRYFORM_CHECKBOX:
			return {
				...state,
				[ action.fieldName ]: {
					...state[ action.fieldName ],
					value: !state[ action.fieldName ].value
				},
				valid: false
			};
		case actionTypes.SET_JEWELRY_IMAGES:
			return {
				...state,
				jewelryImages: {
					...state.jewelryImages,
					value: action.urls
				}
			};
		case actionTypes.SET_JEWELRY_REMOVE_IDS:
			return {
				...state,
				jewelryImageRemoveList: [
					...state.jewelryImageRemoveList,
					...action.ids
				]
			};
		case actionTypes.JEWELRYFORM_START_IMAGE_LOADING:
			return {
				...state,
				imageLoading: true
			};
		case actionTypes.JEWELRYFORM_STOP_IMAGE_LOADING:
			return {
				...state,
				imageLoading: false
			};
		case actionTypes.SET_JEWELRY_IMPORT_IMAGES:
			return {
				...state,
				jewelryImportImages: action.images
			};
		case actionTypes.REMOVE_JEWELRY_IMPORT_IMAGE:
			return {
				...state,
				jewelryImportImages: state.jewelryImportImages.filter((image) => action.id !== image.id)
			};
		case actionTypes.TOGGLE_JEWELRYFORM_CATEGORY:
			return {
				...state,
				jewelryCategories: {
					...state.jewelryCategories,
					[ action.parentName ]: {
						...state.jewelryCategories[ action.parentName ],
						[ action.fieldName ]: !state.jewelryCategories[ action.parentName ][ action.fieldName ]
					}
				}
			};
		case actionTypes.JEWELRYFORM_SUBMIT_SUCCESS:
			return {
				...state,
				submitted: true,
				loading: false
			};
		case actionTypes.SET_JEWELRYFORM_ERROR:
			return {
				...state,
				[ action.fieldName ]: {
					...state[ action.fieldName ],
					error: action.error
				}
			};
		case actionTypes.SET_JEWELRYFORM_VALID:
			return {
				...state,
				valid: true
			};
		case actionTypes.JEWELRYFORM_START_LOADING:
			return {
				...state,
				loading: true
			};
		case actionTypes.JEWELRYFORM_STOP_LOADING:
			return {
				...state,
				loading: false
			};
		case actionTypes.SET_EDITJEWELRY_LOADED:
			return {
				...state,
				editJewelryLoaded: true
			};
		case actionTypes.RESET_JEWELRYFORM:
			return defaultState;
		case actionTypes.REMOVE_JEWELRY:
			return {
				...state,
				submitted: true
			};
		default:
			return state;
	}
};

export default jewelryFormReducer;