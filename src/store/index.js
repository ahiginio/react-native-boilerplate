import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

/* -------------------------------- Reducers -------------------------------- */
import AddressReducer from './reducers/addresses.reducers';
import CategoryReducer from './reducers/category.reducers';
import ProductReducer from './reducers/products.reducers';

const RootReducer = combineReducers({
  categories: CategoryReducer,
  products: ProductReducer,
  addresses: AddressReducer,
});
const store = configureStore({
  reducer: RootReducer,
});
export default store;
