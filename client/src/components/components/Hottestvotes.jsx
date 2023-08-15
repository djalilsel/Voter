import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Hottestvotes = ({ id, creatorId, description }) => {

    const [data, setData] = useState({})

    useEffect(() => {

        async function fetchData() {
            const res = await axios.get(`http://localhost:8800/api/user/find/${creatorId}`)
            setData(res.data[0])
        }

        fetchData()

    }, [])

    return (
        <div className='flex justify-between'>
            <Link className='flex items-center font-medium gap-3' to={`/profile/${creatorId}`}>
                <img src={`${data.pfp}`} className='w-7 h-7 rounded-full'/>
                <span>{data.name}</span>
            </Link>
            <Link to={`/post/${id}`}>
                <div className='text-sm'>
                    {description}
                </div>
            </Link>
        </div>
    );
};

export default Hottestvotes;