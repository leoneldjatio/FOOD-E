import { createStore, combineReducers } from 'redux';
import {cartItems} from './reducers/cartItems';

const rootReducers = combineReducers({
    cartItems
})

const Store = createStore(rootReducers);

export default Store;