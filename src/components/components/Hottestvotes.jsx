import React from 'react';
import { Link } from 'react-router-dom';

const Hottestvotes = ({ data }) => {
    return (
        <Link className='flex justify-between' to={data.postUrl}>
            <Link className='flex items-center font-medium gap-3' to={data.publisherUrl}>
                <img src={`${data.image}`} className='w-7 h-7'/>
                <span>{data.publisher}</span>
            </Link>
            <div className='text-sm'>
                {data.description}
            </div>
        </Link>
    );
};

export default Hottestvotes;