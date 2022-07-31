import logo from './logo.svg';
import './App.css';

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
    <div className="App">
    <div className="container">
      <p className='intro-text'>Hey there! What do I call you?</p>
      <input className='name-input' type="text" spellCheck="false"/>
      <a href='https://www.google.co.in/'>
        <button className='btn btn-border-pop'>Get Started</button>
      </a>
      
    </div>
    </div>
      
  );
}

export default App;
