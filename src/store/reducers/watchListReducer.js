import * as actionTypes from '../actions/actionTypes';

const defaultState = {
  watches: [],
  loading: false,
  filters: {
    brand: {
      value: '',
      controls: {
        whiteOption: true
      },
      name: 'brand'
    },
    model: {
      value: '',
      controls: {
        whiteOption: true
      },
      name: 'model'
    },
    ref: {
      value: '',
      controls: {},
      name: 'ref'
    }
  }
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
    case actionTypes.SET_WATCH_LIST_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.fieldName]: {
            ...state.filters[action.fieldName],
            value: action.value
          }
        }
      }
    default: return state;
  }
};

export default reducer;