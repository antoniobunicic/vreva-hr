import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/index.css';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesOverviewPage from './pages/services/ServicesOverviewPage';
import ServiceDetailPage from './pages/services/ServiceDetailPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesOverviewPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
