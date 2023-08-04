import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div className='p-4'>
            This page does not exist or it may be under development.
            <Link to='/' className='block underline cursor-pointer text-purple-800'>
                Back Home
            </Link>
        </div>
    );
};

export default Notfound;