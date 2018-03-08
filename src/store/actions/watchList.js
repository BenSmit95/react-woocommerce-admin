import * as actionTypes from './actionTypes';
import { getWatches } from '../../_secret/auth';
import * as watchAttributes from '../../_secret/watchAttributes';

export const fetchWatches = () => {
  return (dispatch) => {
    dispatch(startFetch());
    getWatches().then((responseList) => {
      console.log('In action creator:', responseList);
      const watchList = responseList.map((watch) => ({
        name: watch.name,
        price: watch.price,
        id: watch.id,
        image: watch.images[0].src,
        ref: watch.attributes.find(attributes => attributes.id === watchAttributes.REF) ? watch.attributes.find(attributes => attributes.id === watchAttributes.REF).options[0] : '',
        brand: watch.attributes.find(attributes => attributes.id === watchAttributes.BRAND) ? watch.attributes.find(attributes => attributes.id === watchAttributes.BRAND).options[0] : '',
        model: watch.attributes.find(attributes => attributes.id === watchAttributes.MODEL) ? watch.attributes.find(attributes => attributes.id === watchAttributes.MODEL).options[0] : '',
      }));
      dispatch(setWatchList(watchList));
    })
  }
}

export const setWatchListFilter = (fieldName, value) => ({
  type: actionTypes.SET_WATCH_LIST_FILTER,
  fieldName,
  value
});


export const setWatchList = (watches) => ({
  type: actionTypes.SET_WATCH_LIST,
  watches
});

export const startFetch = () => ({
  type: actionTypes.WATCHLIST_START_FETCH
});