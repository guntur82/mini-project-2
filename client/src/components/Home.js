import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages';
const Home = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<HomePage />}></Route>
      </Routes>
    </>
  );
};

export default Home;
