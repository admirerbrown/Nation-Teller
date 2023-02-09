const SELECT_COUNTRY = 'country/details/SELECT_COUNTRY';

const initialState = {};

const selectedCountryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_COUNTRY:
      return {
        ...state,
        selectedCountry: action.payload,
      };
    default:
      return state;
  }
};

export const selectCountry = (payload) => ({
  type: SELECT_COUNTRY,
  payload,
});

export default selectedCountryReducer;
