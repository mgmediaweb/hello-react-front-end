/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getGreetings = createAsyncThunk(
  'greetings/get',
  async () => {
    const response = await fetch('https://mv-rails-api.herokuapp.com/greeting', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      mode: 'no-cors',
    });
    console.log('@@@ response', response);
    const data = await response.json();
    return data;
  },
);
