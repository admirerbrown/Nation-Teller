import { useSelector } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import africa1 from '../../images/africa1.jpg';
import Filter from '../Filter';

const Homepage = () => {
  const countryData = useSelector((state) => state.home.data);

  return (
    <div>
      <div className="container-A">
        <div className="continent-img-box">
          <img className="world-img loader" src={africa1} alt="World" />
        </div>
        <div className="banner-text">
          <p className="b1"> AFRICA</p>
          <p className="b2">
            {countryData.length}
            {' '}
            nations
          </p>
        </div>
      </div>
      <Filter />
      <p className="filter-title">STATS BY COUNTRY</p>

      <div className="grid-container">
        {countryData.map((country) => (
          <CountryCard key={country.cca2} country={country} />
        ))}
      </div>
    </div>
  );
};

const CountryCard = ({ country }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${country.name.common}`);
  };

  return (
    <div className="country">
      <div className="next-page">
        <p>{country.cca3}</p>
        <BsArrowRightCircle onClick={handleClick} />
      </div>

      <div className="country-img">
        <img className="flag" src={country.flags.png} alt="africa1" />
        <div className="info-box">
          <p className="c-name">{country.name.common}</p>
          <p>
            lat:
            {country.latlng[0]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
