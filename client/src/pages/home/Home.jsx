import React, { useEffect, useState } from 'react';
import Post from '../../components/components/Post';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Home = () => {

    const user = JSON.parse(localStorage.user)

    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchPosts() {
            const res = await axios.get("http://localhost:8800/api/posts/all")
            setPosts(res.data)
        }
        fetchPosts()
    }, [])

    const POSTS = posts.map(post => {
        return (
            <Post 
                key={post.id} 
                image={post.image} 
                creatorId={post.creator_id}
                description={post.description}
                createDate={post.create_date}
            />
            )
    })

    return (
        <div className='flex-1 dark:bg-[#535353] p-6 flex flex-col gap-3 mx-24'>
            <div className='flex gap-2 dark:bg-[#212121] p-6 flex-col border dark:border-[#616161] shadow-lg rounded-lg'>
                <div className='flex items-center mb-2'>
                    <Link to={`/profile/${user.id}`}>
                        <img src={user.pfp} alt="pfp" className='w-10 h-10 mr-3 rounded-full'/>
                    </Link>
                    <input type="text" className='rounded-md px-2 py-1 bg-inherit border border-[#535353] w-full' placeholder="What's on your mind"/>
                </div>
                <div className='flex justify-around'>
                    <div className='flex gap-2 items-center'>
                        <FontAwesomeIcon icon={faImage} className="dark:text-white fa-lg" />
                        <span>Add image</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <FontAwesomeIcon icon={faPlus} className='dark:text-white fa-lg' />
                        <span>Add item</span>
                    </div>
                    <button className='bg-cyan-500 px-3 py-1 rounded-lg'>
                        Post
                    </button>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                {POSTS}
            </div>
        </div>
    );
};

export default Home;