import * as actionTypes from './actionTypes';
import { getJewelry } from '../../_secret/auth';
import * as jewelryAttributes from '../../_secret/jewelryAttributes';

export const fetchJewelry = () => {
  return (dispatch) => {
    dispatch(startFetch());
    getJewelry().then((responseList) => {
      console.log('In action creator:', responseList);
      const jewelryList = responseList.map((jewelry) => ({
        name: jewelry.name,
        price: jewelry.price,
        id: jewelry.id,
        image: jewelry.images[0].src,
        brand: jewelry.attributes.find(attributes => attributes.id === jewelryAttributes.BRAND) ? jewelry.attributes.find(attributes => attributes.id === jewelryAttributes.BRAND).options[0] : '',
      }));
      dispatch(setJewelryList(jewelryList));
    })
  }
}

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