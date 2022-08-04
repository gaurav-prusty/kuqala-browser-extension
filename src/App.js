import './App.css';
import Info from './Info';
import {Routes, Route, Navigate} from "react-router-dom";
import Home from './Home';
import React, { useEffect, useState } from 'react';


function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
      </Routes>
  </div>

  );
}

export default App;
