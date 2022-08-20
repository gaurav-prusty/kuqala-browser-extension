import React, { useState, useEffect } from 'react';

function Content() {
    let [time, setTime] = useState("");                                         //live time
    let [removeFocusInput, setRemoveFocusInput] = useState(false);              //toggle appearance of main focus input element
    let [focusItemText, setFocusItemText] = useState("");                       //store main focus entered by the user
    let [focusInputText, setFocusInputText] = useState("");                     //--> clear the input field on click on edit button
    let [strike, setStrike] = useState(false);                                  //--> strike the main focus item

    var greeting = "";
    const date = new Date();

    //to convert username to title case
    function titleCase(str) {
        if (str != null){
            var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
        return splitStr.join(' '); 
        }  
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

    function enterHandler(event) {
        if(event.key === 'Enter') {
            setRemoveFocusInput(true);
            setFocusItemText(event.target.value);
            setFocusInputText("");
        }
    }

    return (
        <div className='content'>

            {/* main content */}
            <div className='time flex-child'>
                {time}
            </div>
            <div className='greeting flex-child'>
                {greeting} 
                {titleCase(window.localStorage.getItem("userName"))}
            </div>
            <div className='user-message flex-child'>
                What's your main focus for today?
            </div>
            <div className='focus flex-child'>
                <input onChange={(event)=> setFocusInputText(event.target.value)} onKeyDown={enterHandler} className='focus-input' spellCheck='false' autoComplete='false'
                style={{display: removeFocusInput ? "none" : "block"}} value={focusInputText} />
            </div>

            {/* focus box */}
            <div className='focus-box' style={{display: removeFocusInput ? "block" : "none"}}>
                <div className='focus-box-title'>TODAY</div>
                <div className='focus-box-item'>
                    <div>
                        <input onClick={()=> setStrike(prev=> !prev)} className='checkbox' type='checkbox' checked={strike ? "checked" : ""}/>
                    </div>
                    <div onClick={()=> setStrike(prev=> !prev)} className='focus-item user-select' style={{fontStyle: "italic", textDecoration: strike ? "line-through" : "none"}}> {focusItemText} </div>
                    <div onClick={()=> setRemoveFocusInput(false)} className='focus-edit'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className='bi bi-pencil-square' viewBox="0 0 16 16"> <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/> <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" fill='white'/></svg>
                    </div>
                </div>
            </div>

        </div>
)}

export default Content