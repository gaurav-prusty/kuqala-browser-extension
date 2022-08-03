import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";


function Home() {

    let [userName, setUserName] = useState();

    const navigate = useNavigate();

    function changeHandler(event) {
        setUserName(event.target.value)
    }

    function goInfo() {
        navigate("/info");
    }

    return (
        <div className="container">
            <p className='intro-text'>Hey there! What do I call you?</p>
            <input onChange={changeHandler} className='name-input' type="text" spellCheck="false"/>
            <button onClick={goInfo} className='btn btn-border-pop' style={{display: userName ? "block" : "none"}}>Get Started</button>
        </div>
    );
}

export default Home;  