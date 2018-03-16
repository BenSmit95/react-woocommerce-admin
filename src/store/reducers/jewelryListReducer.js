import * as actionTypes from "../actions/actionTypes";

const defaultState = {
  jewelry: [],
  loading: false,
  filters: {

  }
};

const reducer = (state = defaultState, action) => {
  switch(action.type) {
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
    case actionTypes.SET_JEWELRY_LIST_FILTER:
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
}

export default reducer;