import * as actionTypes from './actionTypes';
import { getWatches } from '../../_secret/auth';


export const fetchWatches = () => {
  return (dispatch) => {
    dispatch(startFetch());
    getWatches().then((responseList) => {
      console.log('In action creator:', responseList);
      const watchList = responseList.map((watch) => ({
        name: watch.name,
        price: watch.price,
        id: watch.id,
      }));
      dispatch(setWatchList(watchList));
    })
  }
}

export const setWatchList = (watches) => ({
  type: actionTypes.SET_WATCH_LIST,
  watches
});

export const startFetch = () => ({
  type: actionTypes.WATCHLIST_START_FETCH
});