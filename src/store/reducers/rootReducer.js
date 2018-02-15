import { combineReducers } from 'redux';

import watchFormReducer from './watchFormReducer';

const rootReducer = combineReducers({
    watchForm: watchFormReducer
});

export default rootReducer;