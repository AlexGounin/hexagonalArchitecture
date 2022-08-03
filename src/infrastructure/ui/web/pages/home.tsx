import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { BreedDetails } from './BreedDetails';
import { BreedList } from './BreedList';
import { NavBar } from '../components/NavBar';
import React from 'react';

export const Home = () => {
  return (
    <Router>
      {/* <div className='container mx-auto'> */}
      <div>
        <NavBar />

        <Routes>
          <Route path='/' element={<BreedList />} />
          <Route path='/details/:breedName' element={<BreedDetails />} />
        </Routes>
      </div>
    </Router>
  );
};
