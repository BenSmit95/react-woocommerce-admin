import * as actionTypes from './actionTypes';
import { getWatches } from '../../_secret/auth';
import { mapWatchToList } from '../../utils/data/mapWatch';
import * as watchAttributes from '../../_secret/watchAttributes';

export const fetchWatches = () => {
  return (dispatch) => {
    dispatch(startFetch());
    getWatches().then((responseList) => {
      console.log('response:', responseList);
      const watchList = responseList.map((watch) => mapWatchToList(watch));
      dispatch(setWatchList(watchList));
    })
  }
}

export const prependWatchList = (watch) => ({
  type: actionTypes.PREPEND_WATCH_LIST,
  watch
})

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

