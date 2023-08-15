import React, { useEffect, useState } from 'react';
import Post from '../../components/components/Post';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Home = () => {

    const user = JSON.parse(localStorage.user)

    const [posts, setPosts] = useState([])
    const [refrech, setRefresh] = useState(false)
    const [error, setError] = useState(null)
    const [createPostData, setCreatePostData] = useState({
        creatorId: user.id,
        description: "",
        image: ""
    })

    useEffect(() => {
        async function fetchPosts() {
            const res = await axios.get("http://localhost:8800/api/posts/all")
            setPosts(res.data)
        }
        fetchPosts()
    }, [refrech])

    const createPost = async (e) => {
        e.preventDefault()
        if(createPostData.description.length === 0){
            return setError("fill the description first")
        }
        await axios.post("http://localhost:8800/api/posts/create", createPostData)
        setRefresh(!refrech)
        setCreatePostData({
            creatorId: user.id,
            description: "",
            image: ""
        })
    }

    const handleCreatePostChange = (e) => {
        setCreatePostData(prevData => ({...prevData, [e.target.name]: e.target.value}))
    }
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
                    <input type="text" name="description" value={createPostData.description} className='rounded-md px-2 py-1 bg-inherit border border-[#535353] w-full' onChange={handleCreatePostChange} placeholder="What's on your mind"/>
                </div>
                { error && <p className='font-semibold text-red-600'>{error}</p>}
                <input type="text" name="image" value={createPostData.image} className='rounded-md px-2 py-1 bg-inherit border border-[#535353] w-full' onChange={handleCreatePostChange} placeholder="Enter Image Url"/>
                <div className='flex justify-around'>
                    <div className='flex gap-2 items-center'>
                        <FontAwesomeIcon icon={faImage} className="dark:text-white fa-lg" />
                        <span>Add image</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <FontAwesomeIcon icon={faPlus} className='dark:text-white fa-lg' />
                        <span>Add item</span>
                    </div>
                    <button className='bg-cyan-500 px-3 py-1 rounded-lg' onClick={createPost}>
                        Post
                    </button>
                </div>
            </div>
            <div id='posts' className='flex flex-col gap-3 overscroll-auto'>
                {POSTS}
            </div>
        </div>
    );
};

export default Home;