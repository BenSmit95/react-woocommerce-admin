import { combineReducers } from 'redux';

import watchFormReducer from './watchFormReducer';
import watchListReducer from './watchListReducer';
import jewelryFormReducer from './jewelryFormReducer';

const rootReducer = combineReducers({
    watchForm: watchFormReducer,
    watchList: watchListReducer,
    jewelryForm: jewelryFormReducer
});

export default rootReducer;