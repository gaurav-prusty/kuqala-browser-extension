import './App.css';
import Info from './Info';
import {Routes, Route} from "react-router-dom";
import Home from './Home';
import React, { useEffect, useState } from 'react';
import { ListContext } from './ListContext';
import { LoginContext } from './LoginContext';


function App() {

  let [items, setItems] = useState([]);
  let [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(()=> {
    const user = localStorage.getItem('userName');
    setIsLoggedIn(user);
  }, [isLoggedIn])

  return (
    <div className='App'>
      <LoginContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
      <ListContext.Provider value={{items, setItems}}>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Info /> : <Home />} />
        </Routes>
      </ListContext.Provider>
      </LoginContext.Provider>
  </div>
)}

export default App;


