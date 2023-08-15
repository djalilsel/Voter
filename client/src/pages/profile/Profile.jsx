import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import Post from '../../components/components/Post';
import axios from 'axios';

const Profile = () => {

    const { id } = useParams()
    const [data, setData] = useState({})
    const [posts, setPosts] = useState([])

    useEffect(() => {

        async function fetchData() {
            const res = await axios.get(`http://localhost:8800/api/user/find/${id}`)
            setData(res.data[0])
        }

        fetchData()

    }, [])

    useEffect(() => {

        async function fetchPosts() {
            const res = await axios.get(`http://localhost:8800/api/posts/userposts/${id}`)
            setPosts(res.data)
        }

        fetchPosts()

    }, [])

    const POSTS = posts.map((post) => {
        return (
            <Post 
                key={post.id} 
                creatorId={post.creator_id}
                image={post.image} 
                description={post.description}
                createDate={post.create_date}
            />)
    })

    return (
        <div className='flex-1 dark:bg-[#535353] relative flex flex-col'>
            <img src={data.background} alt="bg" className='h-60'/>
            <div className='self-center relative top-[-40px] z-30'>
                <img src={data.pfp} alt="pfp" className='w-28 h-28 rounded-full' />
            </div>
            <div className='px-8'>
                <div className='text-center border shadow-lg relative top-[-80px] pt-16 px-6 pb-6 z-0 dark:bg-[#212121] dark:border-[#616161]'>
                    <span>{data.name}</span> <br /><br />
                    <span className='bg-cyan-700 p-2 rounded-md font-semibo text-white'>Follow</span>
                    <div className='flex gap-4 justify-center absolute top-2 right-2'>
                        <FontAwesomeIcon icon={faFacebook} className="dark:text-white text-blue-700 fa-2xl" />
                        <FontAwesomeIcon icon={faInstagram} className="dark:text-white text-purple-800 fa-2xl" />
                        <FontAwesomeIcon icon={faTwitter} className="dark:text-white text-blue-700 fa-2xl" />
                        <FontAwesomeIcon icon={faLinkedin} className="dark:text-white text-blue-900 fa-2xl" />
                    </div>
                </div>
                <div className='relative top-[-40px]'>
                    {POSTS}
                </div>
            </div>
        </div>
    );
};

export default Profile;