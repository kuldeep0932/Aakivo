import { useState } from 'react'
import './App.css'
import Navbar from './components/layout/Navbar.jsx';
import Home from './pages/Home.jsx';
import Footer from './components/layout/Footer.jsx';

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <Footer />
    </>
  );
}

export default App;
