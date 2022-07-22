// Components
import React from 'react'
import Home from './Home'

// Packages
import {
    BrowserRouter as Router,
    Routes, Route,
  } from "react-router-dom";


const Main = () => {
  return (
    <Router>

        

        <Routes>
        
            <Route exact path="/" element={<Home/>}/>   

        </Routes>

    </Router>
  )
}

export default Main