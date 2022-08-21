import React from 'react';


function Bottomleft() {

    //navigate to home page
    function goHome() {
        window.localStorage.removeItem("userName");
        window.location.reload(false);
    }

    return (
        <div>
            {/* <div onClick={goHome} className='bottom-left'> */}
            <div onClick={()=> goHome()} className='bottom-left'>
                <div className='power'>
                    <svg className='power-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 32 32"> <path d="M7.5 1v7h1V1h-1z"/> <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z" fill='white'/> </svg>
                </div> 
                <div className='logout-text'>
                    <p>Log Out</p>  
                </div>
            </div>
        </div> 
)}

export default Bottomleft;