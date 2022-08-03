import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// //Unsplash API: random background image fetch 
// let bg = document.querySelector("body");
// let clientId = "lFGU4dhMSTF7L-lvBxmaPO_RhwiYeu46ax1hM3654Ww";
// let url = `https://api.unsplash.com/photos/random/?client_id=${clientId}&orientation=landscape`;
// let testUrl = "https://images.unsplash.com/photo-1657231885603-6ca5e9e13898?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNTA5MjZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTkzNDc5ODE&ixlib=rb-1.2.1&q=80";

// fetch(url)
//   .then(res=> res.json())
//   .then(jsonData=> {
//       console.log(jsonData.urls.full);
//       bg.style.backgroundImage = `url("${jsonData.urls.full})`;
//       //bg.style.backgroundImage = `url("${testUrl}")`
//   })

//App render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
