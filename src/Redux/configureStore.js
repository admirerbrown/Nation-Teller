import { configureStore } from '@reduxjs/toolkit';
import homePageReducer from './home/homeSlice';
import selectedCountryReducer from './details/detailSplice';

const store = configureStore({
  reducer: {
    home: homePageReducer.reducer,
    detail: selectedCountryReducer,
  },
});

export default store;
