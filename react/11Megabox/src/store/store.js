import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // Ensure this is the correct path to your authSlice

const store = configureStore({
  reducer: {
    auth: authReducer, // Add your reducers here
  },
});

export default store;