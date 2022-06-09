import { createStore, combineReducers } from 'redux';
import { userReducer } from './reducers/userReducer';

const rootReducers = combineReducers({
    userReducer,
})

const Store = createStore(rootReducers);

export default Store;