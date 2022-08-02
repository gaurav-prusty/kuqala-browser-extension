import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import { UserContext } from './UserContext';


function Home() {

    let {userName, setUserName} = useContext(UserContext);

    
    return (
        <div className="container">
            <p className='intro-text'>Hey there! What do I call you?</p>
            <input onChange={event=> setUserName(event.target.value)} className='name-input' type="text" spellCheck="false"/>
            <Link to="/info"> 
                <button className='btn btn-border-pop'>Get Started</button>
            </Link>
        </div>
    );
}

export default Home;  