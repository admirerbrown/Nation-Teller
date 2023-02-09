/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
/* eslint-disable no-restricted-globals */
import {
  BsArrowLeftCircle, BsGithub, BsLinkedin, BsTwitter, BsGearWide,
} from 'react-icons/bs';
import { IoMdMic } from 'react-icons/io';

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
          <div className="nav-lane">
            <BsArrowLeftCircle onClick={handleClick} className="back-icon" />
            <div className="socials">
              <a href="https://github.com/admirerbrown">
                <BsGithub />
              </a>
              <a href="https://www.linkedin.com/in/samuel-ntow-kyere/">
                <BsLinkedin />
              </a>
              <a href="https://twitter.com/brown_admirer">
                <BsTwitter />
              </a>
            </div>

            <div className="left-lane">
              <IoMdMic />
              <BsGearWide />
            </div>
          </div>

          <div className="container-A sp1">
            <div className="cont-img-box">
              <img className="selected-img loader" src={countryInfo.flags.png} alt="World" />
            </div>
            <div className="banner-text">
              <p className="country-name">
                {' '}
                {countryInfo.name.common}
              </p>
              <p className="b2">
                area:
                {' '}
                {countryInfo.area}

              </p>
            </div>
          </div>
          <div>
            <ul>
              <li>
                <p className="val">Population :</p>
                {countryInfo.population}
              </li>
              <li className="new-Color">
                <p className="val ">Timezones :</p>
                {countryInfo.timezones[0]}
              </li>
              <li>
                <p className="val">Capital :</p>
                {countryInfo.capital[0]}
              </li>
              <li className="new-Color">
                <p className="val">Latitude :</p>
                {countryInfo.latlng[0]}
              </li>
              <li>
                <p className="val">Longitude :</p>
                {countryInfo.latlng[1]}
              </li>
              <li className="new-Color">
                <p className="val">Subregion :</p>
                {countryInfo.subregion}
              </li>
              <li>
                <p className="val">Area :</p>
                {countryInfo.area}
              </li>
              <li className="new-Color">
                <p className="val">Ccn3 :</p>
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
