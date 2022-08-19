// Components
import React from 'react'
import Home from './Home'

// Packages
import {
    BrowserRouter as Router,
    Routes, Route, useLocation,
  } from "react-router-dom";
import Logo from '../components/Header/Logo';
import Header from '../components/Header/Header';
import Single from './Single';
import Footer from '../components/Footer/Footer';
import { AnimatePresence } from 'framer-motion';
import Multiple from './Multiple';

const Main = () => {
  const location = useLocation();
  return (
    

          <div className="frame-limit">
            
       <Logo/>
        <Header/>
            <AnimatePresence exitBeforeEnter>
        <Routes key={location.key} location={location}>
        
            <Route exact path="/" element={<Home/>}/>   
            <Route exact path="/post/:slug" element={<Single/>}/> 
            <Route exact path="/search/:query" element={<Multiple/>}/> 
            <Route exact path="/cat" element={<Multiple/>}/>     
            <Route exact path="/*" element={<h1>Hello</h1>}/>   

        </Routes>
        </AnimatePresence>

        </div>
  )
}

export default Main