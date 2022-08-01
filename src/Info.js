import React from 'react';
import {Link} from "react-router-dom";

function Info() {
    return (
        <div className='info'>
            <div className='top-left'>
                <div className='search-icon'>
                    <svg className='search-icon-svg' xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="-150 0  650 650"><title>ionicons-v5-f</title><path d="M464,428,339.92,303.9a160.48,160.48,0,0,0,30.72-94.58C370.64,120.37,298.27,48,209.32,48S48,120.37,48,209.32s72.37,161.32,161.32,161.32a160.48,160.48,0,0,0,94.58-30.72L428,464ZM209.32,319.69A110.38,110.38,0,1,1,319.69,209.32,110.5,110.5,0,0,1,209.32,319.69Z"/></svg>
                </div>
                <div className='search-field'>
                    <input className='search-field-input' placeholder='Google Search' spellCheck="false"></input>
                </div>
                <div className='search-cross'>
                    <button className='search-cross-btn'>
                        <svg className='search-cross-svg' width="25" height="25" viewBox="-0.5 -0.5 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="white" /></svg>
                    </button>
                </div>
            </div>
            <div className='top-right'>
                <img className='weather-icon' src='https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png' ></img>
                <p className='weather-info temp'>35&#176;</p>
                <p className='weather-info loc'>Shankar Vihar, New delhi, India</p>
            </div>
            <Link to="/">
            <div className='bottom-left'>
                    <div className='power'>
                        <svg className='power-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 32 32"> <path d="M7.5 1v7h1V1h-1z"/> <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z" fill='white'/> </svg>
                    </div> 
                    <div className='logout-text'>
                        <p>Log Out</p>  
                    </div> 
            </div>
            </Link>
            <div className='bottom-right'>
                <div className='todo'>
                    <p>TODO</p>
                </div>
            </div>    
            <div className='content'>
                <div className='time flex-child'>
                    88:88
                </div>
                <div className='greeting flex-child'>
                    Good Afternoon, Gaurav!
                </div>
                <div className='user-message flex-child'>
                    What's your main focus for today?
                </div>
                <div className='focus flex-child'>
                    <input className='focus-input'></input>
                </div>
            </div>
            
            
        </div>
        
       
    );
}

export default Info;