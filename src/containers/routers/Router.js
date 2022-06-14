import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsPage from '../pages/ProductsPage';
import AlarmPage from '../pages/AlarmPage';
import NoticePage from '../pages/NoticePage';
import StatsPage from '../pages/StatsPage';
import Error404 from '../pages/Error404';
import HomePage from '../pages/HomePage';

export default function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/alarm' element={<AlarmPage />} />
          <Route path='/notice' element={<NoticePage />} />
          <Route path='/stats' element={<StatsPage />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </Router>
    </>
  )
}