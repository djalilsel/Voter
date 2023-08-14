import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Post = ({ image, creatorId, description, createDate }) => {

    let time
    let timename

    const [data, setData] = useState({})

    useEffect(() => {

        async function fetchData() {
            const res = await axios.get(`http://localhost:8800/api/user/find/${creatorId}`)
            setData(res.data[0])
        }

        fetchData()

    }, [])

    // Time formating
    const dateNow = new Date().toISOString()

    const createDay = createDate.split("T")[0]
    let createTime= createDate.split("T")[1].split(".")[0]

    const currentDay = dateNow.split("T")[0]
    let currentTime = dateNow.split("T")[1].split(".")[0]

    if( createDay === currentDay ){

        const diffInMs = (new Date(`${createDay} ${createTime}`).getTime() - new Date(`${currentDay} ${currentTime}`).getTime())
        if( diffInMs / (1000 * 60 * 60) ){
            const diff = diffInMs / (1000 * 60 * 60)
            time = Math.abs(Math.round(diff))
            timename = time === 1 ? "hour" : "hours"
        } else if(diffInMs / (1000 * 60) ){
            const diff = diffInMs / (1000 * 60)
            time = Math.abs(Math.round(diff))
            timename = time === 1 ? "minute" : "minutes"
        } else if(diffInMs / (1000) ){
            const diff = diffInMs / (1000)
            time = Math.abs(Math.round(diff))
            timename = time === 1 ? "second" : "seconds"
        }
        
    } else {
        time = new Date(`${currentDay}`) - new Date(`${createDay}`)
        time = time / (1000 * 60 * 60 * 24)
    }

    return (
        <div className='dark:bg-[#212121] mb-2 shadow-lg border dark:border-[#757575] p-3'>
            <div className='mb-2 flex justify-between' >
                <Link className='flex items-center w-fit' to={`/profile/${creatorId}`}>
                    <img src={data.pfp} alt="pfp" className='w-9 h-9 mr-3 rounded-full' />
                    <span>{data.name}</span>
                </Link>
                <div className='text-sm font-light pt-3'>
                    posted {time} {timename} ago
                </div>
            </div>
            <span className='text-sm mb-6 block'>
                {description}
            </span>
            <img src={image} alt="post" className='w-full max-h-[500px] rounded-sm'/>

        </div>
    );
};

export default Post;