/* eslint-disable max-len */
/* eslint-disable no-restricted-globals */
import { BsArrowLeftCircle } from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { selectCountry } from '../../Redux/details/detailSplice';

const DetailsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  // searching for the country selected details to display.
  const countryData = useSelector((state) => state.home.data);
  const country = countryData.find((c) => c.name.common === id);

  useEffect(() => {
    // Store the country data in the Redux store when the component is first loaded
    if (country) {
      dispatch(selectCountry(country));
    }
  }, [dispatch, country]);

  const countryInfo = useSelector((state) => state.detail.selectedCountry);// current state for details page..

  const handleClick = () => {
    // Go back to home when back button is clicked...
    navigate('/');
    location.reload();
  };

  return (
    <div>
      {countryInfo ? (
        <div className="container">
          <p>
            I am details page
            <BsArrowLeftCircle onClick={handleClick} />
          </p>
          <div className="container-A">
            <div className="continent-img">
              <img className="world-img" src={countryInfo.flags.png} alt="World" />
            </div>
            <div>{countryInfo.name.common}</div>
          </div>
          <div>
            <ul>
              <li>
                population:
                {countryInfo.population}
              </li>
              <li>
                timezones:
                {countryInfo.timezones[0]}
              </li>
              <li>
                capital:
                {countryInfo.capital[0]}
              </li>
              <li>
                latitude:
                {countryInfo.latlng[0]}
              </li>
              <li>
                longitude:
                {countryInfo.latlng[1]}
              </li>
              <li>
                subregion:
                {countryInfo.subregion}
              </li>
              <li>
                area:
                {countryInfo.area}
              </li>
              <li>
                ccn3:
                {countryInfo.ccn3}
              </li>
            </ul>
          </div>
        </div>

      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default DetailsPage;
