import React from 'react';
import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Header from "./components/layout/Header/Header.jsx"
import Footer from "./components/layout/Footer/Footer.jsx"
import WebFont from "webfontloader";
import Home from './components/Home/Home.jsx';
// import Loader from './components/layout/loader/Loader.jsx';
import ProductDetails from './components/Product/ProductDetails.jsx'


function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });


  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        {/* <Route path="/loading" element={<Loader />} /> //this is for test */}

      </Routes>
      <Footer />
    </Router>
  )
}

export default App
