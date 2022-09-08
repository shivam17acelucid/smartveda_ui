import {configureStore} from '@reduxjs/toolkit';
import mobileReducer from './createSlice';
export const store = configureStore({
  reducer: {
    mobile: mobileReducer,
  },
});
