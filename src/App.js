import './App.css';
import Info from './Info';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Home';
import { UserContext } from './UserContext';
import { useState } from 'react';


function App() {



  let [userName, setUserName] = useState(null);

  return (
    <div className='App'>
      <UserContext.Provider value={{userName, setUserName}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </UserContext.Provider>

    </div>

  );
}

export default App;
