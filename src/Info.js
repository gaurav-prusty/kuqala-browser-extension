import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Bottomleft from './Bottomleft';
import Bottomright from './Bottomright';
import Content from './Content';
import Topleft from './Topleft';
import Topright from './Topright';

function Info() {
    const navigate = useNavigate();

    

    

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