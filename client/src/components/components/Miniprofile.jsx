import React from 'react';
import { Link } from 'react-router-dom';

const  Miniprofile = ({ name, pfp, id }) => {
    return (
        <div className='flex justify-between'>
            <Link className='flex items-center font-medium gap-3' to={`/profile/${id}`}>
                <img src={pfp} className='w-7 h-7 rounded-full'/>
                <span>{name}</span>
            </Link>
            <div className='border-none px-2 mr-2 bg-blue-500 text-white font-semibold cursor-pointer'>
                Follow
            </div>
        </div>
    );
};

export default Miniprofile;