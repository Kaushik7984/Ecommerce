import React from 'react';
import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Header from "./components/layout/Header/Header.jsx"
import Footer from "./components/layout/Footer/Footer.jsx"
import WebFont from "webfontloader";
import Home from './components/Home/Home.jsx';
import ProductDetails from './components/Product/ProductDetails.jsx'
import Products from './components/Product/Products.jsx'
import Search from './components/Product/Search.jsx'
import Loader from './components/layout/Loader/Loader.jsx';
import LoginSignUp from './components/User/LoginSignUp.jsx';


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
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:keyword" element={<Products/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/loading" element={<Loader/>} />
        <Route path="/login" element={<LoginSignUp/>} />

       

      </Routes>
      <Footer />
    </Router>
  )
}

export default App
