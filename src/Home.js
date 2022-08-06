import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";


function Home() {

    let [userName, setUserName] = useState();               //store username entered by user

    const navigate = useNavigate();

    function goInfo() {
        navigate("/info");
        window.localStorage.setItem("userName", userName);
    }

    return (
        <div className="container">
            <p className='intro-text'>Hey there! What do I call you?</p>
            <input onChange={(event)=> setUserName(event.target.value)} className='name-input' type="text" spellCheck="false"/>
            <button onClick={goInfo} className='btn btn-border-pop' style={{display: userName ? "block" : "none"}}>Get Started</button>
        </div>
)}

export default Home;  