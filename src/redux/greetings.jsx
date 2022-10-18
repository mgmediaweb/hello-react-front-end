import { createSlice } from '@reduxjs/toolkit';
import { getGreetings } from './connection';

const initialState = {
  greeting: [],
  status: null,
};

const greetings = createSlice({
  name: 'getGreetings',
  initialState,
  extraReducers: {
    [getGreetings.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),
    [getGreetings.fulfilled]: (state, action) => ({
      ...state,
      status: 'success',
      greeting: action.payload,
    }),
    [getGreetings.rejected]: (state) => ({
      ...state,
      status: 'failed',
    }),
  },
});

export default greetings.reducer;
