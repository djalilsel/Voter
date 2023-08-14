import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Post = ({ image, creatorId, description, createDate }) => {

    const [data, setData] = useState({})

    useEffect(() => {

        async function fetchData() {
            const res = await axios.get(`http://localhost:8800/api/user/find/${creatorId}`)
            setData(res.data[0])
        }

        fetchData()

    }, [])

    return (
        <div className='dark:bg-[#212121] mb-2 shadow-lg border dark:border-[#757575] p-3'>
            <div className='flex items-center mb-2'>
                <img src={data.pfp} alt="pfp" className='w-9 h-9 mr-3 rounded-full' />
                <span>{data.name}</span>
            </div>
            <span className='text-sm mb-6 block'>
                {description}
            </span>
            <img src={image} alt="post" className='w-full max-h-[500px] rounded-sm'/>

        </div>
    );
};

export default Post;