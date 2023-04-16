import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../container/home';
import ProductDetail from '../components/product/product-detail';

const Router = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route path='/product-detail' element={<ProductDetail/>} />
      <Route path='*' element={<Home />} />
    </Routes>
  );
};

export default Router;