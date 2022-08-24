import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  MainPage,
  DistributorPage,
  BrandPage,
  ItemPage,
  ListDistributor,
  ListBrand,
  ListItem,
} from '../../pages';
import { NavbarMenu, Banner } from '../index';

const MainContent = () => {
  return (
    <div className="container p-3">
      <Banner />
      <NavbarMenu />
      <Routes>
        <Route path="" element={<MainPage />} />
        <Route path="distributor" element={<DistributorPage />}>
          <Route path="" element={<ListDistributor />}></Route>
        </Route>
        <Route path="brand" element={<BrandPage />}>
          <Route path="" element={<ListBrand />}></Route>
        </Route>
        <Route path="item" element={<ItemPage />}>
          <Route path="" element={<ListItem />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default MainContent;
