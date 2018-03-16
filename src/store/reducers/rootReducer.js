import { combineReducers } from 'redux';

import watchFormReducer from './watchFormReducer';
import watchListReducer from './watchListReducer';
import jewelryFormReducer from './jewelryFormReducer';
import jewelryListReducer from './jewelryListReducer';

const rootReducer = combineReducers({
    watchForm: watchFormReducer,
    watchList: watchListReducer,
    jewelryForm: jewelryFormReducer,
    jewelryList: jewelryListReducer
});

export default rootReducer;