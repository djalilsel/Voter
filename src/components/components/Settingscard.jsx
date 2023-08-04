import React from 'react';
import { Link } from 'react-router-dom';

const Settingscard = ({ data }) => {

    return (
        <Link className='flex items-center font-medium gap-4' to={data.link}>
            <img src={`${data.icon}`} className='w-8 h-8'/>
            <span>{data.title}</span>
        </Link>
    );
};

export default Settingscard;