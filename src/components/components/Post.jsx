import React from 'react';

const Post = ({ pfp, image, publisher, ublisherUrl, postUrl, description }) => {
    return (
        <div className='dark:bg-[#212121] mb-2 shadow-lg border dark:border-[#757575] p-3'>
            <div className='flex items-center mb-2'>
                <img src={pfp} alt="pfp" className='w-9 h-9 mr-3 rounded-full' />
                <span>{publisher}</span>
            </div>
            <span className='text-sm mb-6 block'>
                {description}
            </span>
            <img src={image} alt="post" className='w-full max-h-[500px] rounded-sm'/>

        </div>
    );
};

export default Post;