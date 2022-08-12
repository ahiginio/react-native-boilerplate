import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

/* -------------------------------- Reducers -------------------------------- */
import CategoryReducer from './reducers/category.reducers';
import ProductReducer from './reducers/products.reducers';

const RootReducer = combineReducers({
  categories: CategoryReducer,
  products: ProductReducer,
});
const store = configureStore({
  reducer: RootReducer,
});
export default store;
