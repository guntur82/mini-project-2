import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavbarMenuUser, BannerUser } from '../index';
import { UserPage } from '../../pages';
const User = () => {
  return (
    <>
      <BannerUser />
      <NavbarMenuUser />
      <Routes>
        <Route path="" element={<UserPage />}></Route>
      </Routes>
    </>
  );
};

export default User;
