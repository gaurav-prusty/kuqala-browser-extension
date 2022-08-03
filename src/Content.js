import React, { useState, useEffect} from 'react';

function Content() {
    let [time, setTime] = useState("");
    var greeting = "";
    const date = new Date();
    const localStorageData = window.localStorage.getItem("userName");

    console.log(localStorageData);
    console.log("is local storage null");
    localStorageData && console.log("hey its here!");







    //to convert username to title case
    function titleCase(str) {
        var splitStr = str?.toLowerCase().split(" ");

        console.log(splitStr);
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);  
 
        }
        return splitStr.join(' '); 
     }
    
    //dynamically set time
    useEffect(()=> {
        setInterval(()=> {
            const Time = new Date();
            setTime(Time.toTimeString().slice(0,5));
        }, 1000); 
    }, []);

    //set greeting wrt time
    if (date.getHours() >= 0 && date.getHours() < 12) {
        greeting = "Good Morning, ";
    } else if (date.getHours() >= 12 && date.getHours() <= 16) {
        greeting = "Good Afternoon, ";
    } else if (date.getHours() > 16) {
        greeting = "Good Evening, ";
    }

    return (
        <div className='content'>
            <div className='time flex-child'>
                {time}
            </div>
            <div className='greeting flex-child'>
                {greeting} {titleCase(JSON.parse(localStorage.getItem("userName")))}!
            
                {/*  */}
            </div>
            <div className='user-message flex-child'>
                What's your main focus for today?
            </div>
            <div className='focus flex-child'>
                <input className='focus-input' spellCheck='false' autoComplete='false'></input>
            </div>
        </div>
    );
}

export default Content