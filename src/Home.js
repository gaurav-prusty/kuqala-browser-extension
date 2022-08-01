import React from 'react';
import {Link} from "react-router-dom";

function Home() {
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