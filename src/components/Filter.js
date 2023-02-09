/* eslint-disable max-len */
import { useDispatch } from 'react-redux';
import { filter } from '../Redux/home/homeSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const filterInput = event.target.value;
    dispatch(filter(filterInput));
  };

  return (
    <div className="filter-cont">
      <input className="filter-input" type="text" onChange={handleChange} placeholder="Enter search.." maxLength="10" />
    </div>
  );
};

export default Filter;
