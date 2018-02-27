import defaultState from './defaultState/jewelryForm'
import * as actionTypes from '../actions/actionTypes';

const jewelryFormReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_JEWELRYFORM_FIELD:
      return {
        ...state,
        [action.fieldName]: {
          ...state[action.fieldName],
          value: action.value
        }
      }
    default: 
    return state;
  }
};

export default jewelryFormReducer;