// Components
import React from 'react'
import Home from './Home'

// Packages
import {
    BrowserRouter as Router,
    Routes, Route,
  } from "react-router-dom";
import Logo from '../components/Header/Logo';
import Header from '../components/Header/Header';
import Single from './Single';


const Main = () => {
  return (
    <Router>

       <Logo/>
        <Header/>

        <Routes>
        
            <Route exact path="/" element={<Home/>}/>   
            <Route exact path="/single" element={<Single/>}/>   

        </Routes>

    </Router>
  )
}

export default Main