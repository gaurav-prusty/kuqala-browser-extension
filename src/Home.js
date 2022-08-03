import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";


function Home() {
    let [userName, setUserName] = useState("");

    const navigate = useNavigate();

    // useEffect(()=> {
    //     //console.log("useEffect log: " + userName);
    //     window.localStorage.setItem("userName", JSON.stringify(userName));
    // }, [userName]);

    //console.log("outside useEffect log: " + userName);

    
    function goToInfo() {

        

        window.localStorage.setItem("userName", JSON.stringify(userName));
        (window.localStorage.getItem("userName") === '""' ) ? alert("User Log in details required!") : navigate("/info");

        // var data = window.localStorage.getItem("userName");
        // console.log("data from local storage: " + data);
        // console.log("length of data stored: " + data.length);
        
        //console.log("clickHandler: " + userName);
    }

    function changeHandler(event) {
        setUserName(event.target.value);
        console.log("changeHandler: ");
        console.log(userName);
    }

    return (
        <div className="container">
            <p className='intro-text'>Hey there! What do I call you?</p>
            <input onChange={changeHandler} className='name-input' type="text" spellCheck="false"/>
            
            <button onClick={goToInfo} className='btn btn-border-pop'>Get Started</button>
        </div>
    );
}

export default Home;  