import './App.css';
import Info from './Info';
import {Routes, Route, Navigate} from "react-router-dom";
import Home from './Home';
import React, { useState } from 'react';
import { ListContext } from './ListContext';
import { LoginContext } from './LoginContext';


function App() {

  let [items, setItems] = useState([]);
  let [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='App'>
      <LoginContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
      <ListContext.Provider value={{items, setItems}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={isLoggedIn ? <Info /> : <Navigate to='/' replace={true} />} />
        </Routes>
      </ListContext.Provider>
      </LoginContext.Provider>
  </div>
)}

export default App;
