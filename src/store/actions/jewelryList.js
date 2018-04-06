import * as actionTypes from './actionTypes';
import { getJewelry, deleteProduct } from '../../_secret/auth';
import { mapJewelryToList } from '../../utils/data/mapJewelry';

export const fetchJewelry = () => {
	return (dispatch) => {
		dispatch(startFetch());
		getJewelry().then((responseList) => {
			console.log('In action creator:', responseList);
			const jewelryList = responseList.map((jewelry) => mapJewelryToList(jewelry));
			dispatch(setJewelryList(jewelryList));
		})
	}
};

export const deleteJewelry = (id) => {
	return (dispatch) => {
		deleteProduct(id);
		dispatch(removeJewelry(id));
	}
};

export const removeJewelry = (id) => ({
	type: actionTypes.REMOVE_JEWELRY,
	id
});

export const prependJewelryList = (jewelry) => ({
	type: actionTypes.PREPEND_JEWELRY_LIST,
	jewelry
});

export const setJewelryListFilter = (fieldName, value) => ({
	type: actionTypes.SET_JEWELRY_LIST_FILTER,
	fieldName,
	value
});

export const setJewelryList = (jewelry) => ({
	type: actionTypes.SET_JEWELRY_LIST,
	jewelry
});

export const startFetch = () => ({
	type: actionTypes.JEWELRYLIST_START_FETCH
});