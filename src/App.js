import './App.css';
import Info from './Info';
import {Routes, Route} from "react-router-dom";
import Home from './Home';
import React, { useState } from 'react';
import { ListContext } from './ListContext';


function App() {

  let [items, setItems] = useState([]);

  return (
    <div className='App'>
    <ListContext.Provider value={{items, setItems}}>
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        
      </Routes>
      </ListContext.Provider>

  </div>

  );
}

export default App;
