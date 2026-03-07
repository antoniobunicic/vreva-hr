import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/index.css';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesOverviewPage from './pages/services/ServicesOverviewPage';
import ServiceDetailPage from './pages/services/ServiceDetailPage';
import NicheDetailPage from './pages/services/NicheDetailPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesOverviewPage />} />
        <Route path="/services/web-development/:niche" element={<NicheDetailPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
