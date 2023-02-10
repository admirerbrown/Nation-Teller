import selectedCountryReducer, { selectCountry } from '../Redux/details/detailSplice';

describe('selectedCountryReducer', () => {
  it('handles the SELECT_COUNTRY action', () => {
    const initialState = {};
    const country = {
      name: 'United States',
      population: 330e6,
      capital: 'Washington D.C.',
    };

    const action = selectCountry(country);
    const nextState = selectedCountryReducer(initialState, action);

    expect(nextState).toEqual({
      selectedCountry: country,
    });
  });
});
