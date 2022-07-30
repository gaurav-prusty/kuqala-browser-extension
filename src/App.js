import logo from './logo.svg';
import './App.css';

function App() {
  let bg = document.querySelector("body");
  let clientId = "lFGU4dhMSTF7L-lvBxmaPO_RhwiYeu46ax1hM3654Ww";
  let url = `https://api.unsplash.com/photos/random/?client_id=${clientId}&orientation=landscape`;
  let testUrl = "https://images.unsplash.com/photo-1657538191753-f6c0a8042594?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNTA5MjZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTkxODE5MTc&ixlib=rb-1.2.1&q=80";



  fetch(url)
  .then(res=> res.json())
  .then(jsonData=> {
    console.log(jsonData.urls.full);
    bg.style.backgroundImage = `url("${jsonData.urls.full})`;
    //  bg.style.backgroundImage = `url("${testUrl}")`
    //  bg.style.backgroundSize = "cover";
    //  bg.style.backgroundRepeat = "no-repeat"
  })
  

  return (
    <div className="App">
    <div className="container">
      <p className='intro-text'>Hey there! What do I call you?</p>
      <input className='name-input' type="text" />
    </div>
    </div>
      
  );
}

export default App;
