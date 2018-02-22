import * as actionTypes from '../actions/actionTypes';

const defaultState = {
  watches: [],
  loading: false
};

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.WATCHLIST_START_FETCH: {
      return {
        ...state,
        loading: true
      }
    }
    case actionTypes.SET_WATCH_LIST:
      return {
        ...state,
        watches: action.watches,
        loading: false
      }
    default: return state;
  }
};

export default reducer;