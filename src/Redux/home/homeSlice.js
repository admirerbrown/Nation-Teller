/* eslint-disable no-restricted-globals */
/* eslint-disable max-len */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// actions types...
const GETDATA = 'covidRat/GETDATA';
const FILTERDATA = 'covidRat/FILTERDATA';

// get all african countries data...
const GetData = createAsyncThunk(GETDATA, async () => {
  const options = {
    method: 'GET',
    url: 'https://restcountries.com/v3.1/region/africa',
  };
  const response = await axios.request(options);
  // return response.data;

  const dataList = response.data;
  return dataList;
});

// action
export const filter = (payload) => ({
  type: FILTERDATA,
  payload,
});

// reducer...
const homePageReducer = createSlice({
  name: 'covidData',
  initialState: {
    data: [],
    isFulfilled: false,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetData.fulfilled, (state, action) => {
      state.isFulfilled = true;
      state.data = action.payload;
    });

    builder.addCase(FILTERDATA, (state, action) => {
      const filteredList = state.data.filter((item) => item.name.common.toLowerCase().includes(action.payload.toLowerCase()));
      state.data = filteredList;
      if (action.payload === '') {
        location.reload();
      }
    });
  },
});

export default homePageReducer;
export { GetData };
