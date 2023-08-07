import React from 'react';
import { Link } from 'react-router-dom';

const Settingscard = ({ icon, title, link }) => {

    return (
        <Link className='flex items-center font-medium gap-4' to={link}>
            <img src={`${icon}`} className='w-8 h-8'/>
            <span>{title}</span>
        </Link>
    );
};

export default Settingscard;