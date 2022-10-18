/* eslint-disable import/extensions */
import { configureStore } from '@reduxjs/toolkit';
import greetings from './greetings';

const reducer = { greetings };

const store = configureStore({
  reducer,
});

export default store;
