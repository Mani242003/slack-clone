import { configureStore } from '@reduxjs/toolkit';
import UserReducer from '../Slices/UserSlices';

export const store = configureStore({
  reducer: {
    userInfo:UserReducer,
  },
});
