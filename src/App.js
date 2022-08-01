import './App.css';
import Info from './Info';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Home';

function App() {
  let bg = document.querySelector("body");
  let clientId = "lFGU4dhMSTF7L-lvBxmaPO_RhwiYeu46ax1hM3654Ww";
  let url = `https://api.unsplash.com/photos/random/?client_id=${clientId}&orientation=landscape`;
  let testUrl = "https://images.unsplash.com/photo-1658563309427-6e703a70203c?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNTA5MjZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTkyNDk3NDI&ixlib=rb-1.2.1&q=80";



  // fetch(url)
  // .then(res=> res.json())
  // .then(jsonData=> {
  //   console.log(jsonData.urls.full);
  //   bg.style.backgroundImage = `url("${jsonData.urls.full})`;
      bg.style.backgroundImage = `url("${testUrl}")`
  // })
  

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
