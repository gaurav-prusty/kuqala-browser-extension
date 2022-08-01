import React from 'react';
import {Link} from "react-router-dom";
import Bottomleft from './Bottomleft';
import Bottomright from './Bottomright';
import Content from './Content';
import Topleft from './Topleft';
import Topright from './Topright';

function Info() {
    return (
        <div className='info'>
            <Topleft />
            <Topright />

            <Content />
            
            <Bottomleft />
            <Bottomright />    
        </div>
    );
}

export default Info;