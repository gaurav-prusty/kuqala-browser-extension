import './App.css';
import Info from './Info';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Home from './Home';
import { useState } from 'react';


function App() {

  const localStorageData = window.localStorage.getItem("userName");
  

  return (
    <div className='App'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/info" element={localStorageData ? <Info /> : <Navigate replace to={"/"} />} />
        </Routes>
    </div>

  );
}

export default App;
