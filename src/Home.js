import React, {useState} from 'react';


function Home() {
    let [userName, setUserName] = useState();                   //store username entered by use            

    function goInfo() {
        localStorage.setItem("userName", userName);
        window.location.reload(false);
    }

    return (
        <div className='home-container'>
            <div className="container">
                <p className='intro-text'>Hey there! What do I call you?</p>
                <input onChange={(event)=> setUserName(event.target.value)} className='name-input' type="text" spellCheck="false"/>
                <button onClick={goInfo} className={`btn btn-border-pop`} style={{display: userName ? "block" : "none"}}>Get Started</button>
            </div>
        </div>
        
)}

export default Home;  