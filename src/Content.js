import React from 'react';

function Content() {
    return (
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
    );
}

export default Content