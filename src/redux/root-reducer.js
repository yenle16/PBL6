import { combineReducers } from 'redux';

import HomeReducer from './home/reducer';

const rootReducer = combineReducers({
    Home: HomeReducer,
});

export default rootReducer;
