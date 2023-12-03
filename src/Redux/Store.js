import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './Features/RootReducer';
import productReducer from './Features/ProductOperation/ProductSlice';
// import rootReducer from './rootReducer';

const store = configureStore({
  reducer: productReducer,
  // other reducers can be configured if needed for scalibility.
});

export default store;