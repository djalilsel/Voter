import React from 'react';
import { Link } from 'react-router-dom';

const Miniprofile = ({ data }) => {
    return (
        <div className='flex justify-between'>
            <Link className='flex items-center font-medium gap-3' to={data.url}>
                <img src={`${data.image}`} className='w-7 h-7'/>
                <span>{data.name}</span>
            </Link>
            <div className='border px-2 mr-2 bg-blue-500 text-white font-semibold cursor-pointer'>
                Follow
            </div>
        </div>
    );
};

export default Miniprofile;