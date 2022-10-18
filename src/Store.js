import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './redux/greetings/greetings';

const store = configureStore({
  reducer: {
    greeting: greetingsReducer
  },
});

export default store;
