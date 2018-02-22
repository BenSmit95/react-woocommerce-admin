import { combineReducers } from 'redux';

import watchFormReducer from './watchFormReducer';
import watchListReducer from './watchListReducer';

const rootReducer = combineReducers({
    watchForm: watchFormReducer,
    watchList: watchListReducer
});

export default rootReducer;