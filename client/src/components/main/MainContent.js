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
  ActionDistributor,
  ActionBrand,
  ActionItem,
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
          <Route path="create" element={<ActionDistributor />}></Route>
          <Route path="edit">
            <Route path=":id" element={<ActionDistributor />}></Route>
          </Route>
          <Route path="delete">
            <Route path=":id" element={<ListDistributor/>}></Route>
          </Route>
        </Route>
        <Route path="brand" element={<BrandPage />}>
          <Route path="" element={<ListBrand />}></Route>
          <Route path="create" element={<ActionBrand />}></Route>
          <Route path="edit">
            <Route path=":id" element={<ActionBrand />}></Route>
          </Route>
          <Route path="delete">
            <Route path=":id" element={<ListBrand />}></Route>
          </Route>
        </Route>
        <Route path="item" element={<ItemPage />}>
          <Route path="" element={<ListItem />}></Route>
          <Route path="create" element={<ActionItem />}></Route>
          <Route path="edit">
            <Route path=":id" element={<ActionItem />}></Route>
          </Route>
          <Route path="delete">
            <Route path=":id" element={<ListItem />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default MainContent;
