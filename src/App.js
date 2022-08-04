import './App.css';
import Info from './Info';
import {Routes, Route} from "react-router-dom";
import Home from './Home';
import React from 'react';


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
