import './App.css';
import './responsive.css';
import './components/details/details.css';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/home/HomePage';
import { GetData } from './Redux/home/homeSlice';
import DetailsPage from './components/details/DetailsPage';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetData());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>

    </div>
  );
}

export default App;
