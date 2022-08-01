import React from 'react';
import {Link} from "react-router-dom";

function Home() {
    let bg = document.querySelector("body");
    let clientId = "lFGU4dhMSTF7L-lvBxmaPO_RhwiYeu46ax1hM3654Ww";
    let url = `https://api.unsplash.com/photos/random/?client_id=${clientId}&orientation=landscape`;
    let testUrl = "https://images.unsplash.com/photo-1657231885603-6ca5e9e13898?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNTA5MjZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTkzNDc5ODE&ixlib=rb-1.2.1&q=80";
        


    // fetch(url)
    // .then(res=> res.json())
    // .then(jsonData=> {
    //     console.log(jsonData.urls.full);
    //     bg.style.backgroundImage = `url("${jsonData.urls.full})`;
    bg.style.backgroundImage = `url("${testUrl}")`
    // })


    return (
        <div className="container">
            <p className='intro-text'>Hey there! What do I call you?</p>
            <input className='name-input' type="text" spellCheck="false"/>
            <Link to="/info"> 
                <button className='btn btn-border-pop'>Get Started</button>
            </Link>
        </div>
    );
}

export default Home;  