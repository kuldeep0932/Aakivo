import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/layout/Navbar.jsx';

// pages import
import Home from './pages/Home.jsx';
import OurInfluencers from './pages/OurInfluencers.jsx';
import CreatorProfile from './pages/CreatorProfile.jsx';
import PricingPage from './pages/PricingPage.jsx';
import AboutPage from './pages/AboutPage.jsx'


import Footer from './components/layout/Footer.jsx';

function App() {
  return (
    <>
      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/our-influencers"
            element={<OurInfluencers />}
          />
          <Route
            path="/creator-profile"
            element={<CreatorProfile />}
          />
          <Route
            path="/pricing"
            element={<PricingPage />}
          />
          <Route
            path="/about"
            element={<AboutPage />}
          />

        </Routes>
      </BrowserRouter>
      {/* <Navbar /> */}
      <Footer />
    </>
  );
}

export default App;
