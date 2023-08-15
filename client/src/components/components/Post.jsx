import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const Post = ({ id, image, creatorId, description, createDate }) => {

    let time
    let timename

    const [creator, setCreator] = useState({})
    const user = JSON.parse(localStorage.user)
    const [showPostOptions, setShowPostOptions] = useState(false)
    const [showEditPost, setShowEditPost] = useState(false)
    const [confirmPostDelete, setConfirmPostDelete] = useState(false)

    useEffect(() => {

        async function fetchUser() {
            try{
                const res = await axios.get(`http://localhost:8800/api/user/find/${creatorId}`)
                setCreator(res.data[0])
            } catch (err){
                console.log(err)
            }
        }

        fetchUser()

    }, [])

    console.log(user.id);
    console.log(creatorId);

    const deletePost = () => {

        async function deletePostt() {
            try{
                await axios.get(`http://localhost:8800/api/posts/delete/${creatorId}/${id}`)
                window.location.reload()
            } catch (err){
                window.alert("This isn't your post dumbass!")
            }
        }

        deletePostt()
    }


    // Time formating
    const dateNow = new Date().toISOString()

    const createDay = createDate.split("T")[0]
    let createTime= createDate.split("T")[1].split(".")[0]

    const currentDay = dateNow.split("T")[0]
    let currentTime = dateNow.split("T")[1].split(".")[0]

const diffInMs = ( new Date(`${currentDay} ${currentTime}`).getTime() - new Date(`${createDay} ${createTime}`).getTime() )
    if( (diffInMs / (1000 * 60 * 60 * 24)) < 1){

        if( (diffInMs / (1000 * 60 * 60)) > 1 ){
            const diff = diffInMs / (1000 * 60 * 60)
            time = Math.abs(Math.round(diff))
            timename = time === 1 ? "hour" : "hours"
        } else if((diffInMs / (1000 * 60)) > 1){
            const diff = diffInMs / (1000 * 60)
            time = Math.abs(Math.round(diff))
            timename = time === 1 ? "minute" : "minutes"
        } else if((diffInMs / (1000)) > 1){
            const diff = diffInMs / (1000)
            time = Math.abs(Math.round(diff))
            timename = time === 1 ? "second" : "seconds"
        }
        
    } else {
        time = new Date(`${currentDay}`) - new Date(`${createDay}`)
        time = time / (1000 * 60 * 60 * 24)
        timename = "day"
    }


    return (
        <div className='dark:bg-[#212121] mb-2 shadow-lg border dark:border-[#757575] p-3'>
            <div className='mb-2 flex justify-between relative' >
                <div className='flex items-center' >
                    <img src={creator.pfp} alt="pfp" className='w-9 h-9 mr-3 rounded-full' />
                    <div>
                        <Link className='w-fit' to={`/profile/${creatorId}`}>
                            <span>{creator.name}</span>
                        </Link>
                        <div className='text-xs font-light'>
                            posted {time} {timename} ago
                        </div>
                    </div>
                </div>
                {creatorId === user.id  && <FontAwesomeIcon icon={faEllipsis} className='dark:text-white absolute top-3 right-3 fa-xl cursor-pointer' onClick={() => setShowPostOptions(!showPostOptions)}/>}
                {showPostOptions && <div className='dark:bg-[#303030] h-24 w-28 p-1 absolute top-5 right-10 '>
                    {!confirmPostDelete && <div className='flex flex-col gap-6 p-3'>
                            <div className='text-sm cursor-pointer' >
                                Edit Post
                            </div>
                            <div className='text-sm cursor-pointer' onClick={() => setConfirmPostDelete(true)}>
                                Delete Post
                            </div>
                        </div>}

                    {confirmPostDelete && <div className='flex justify-between items-center h-full'>
                        <button type='submit' className='h-fit text-sm border border-slate-500 px-1 py-1 rounded-lg bg-[#535353]' onClick={() => setConfirmPostDelete(false)}>
                            Cancel
                        </button>
                        <button type='submit' className='h-fit text-sm border border-slate-500 px-1 py-1 rounded-lg bg-[#535353]' onClick={deletePost}>
                            Delete
                        </button>
                    </div>
                    }
                </div>}
            </div>
            <span className='text-sm mb-6 block'>
                {description}
            </span>
            <img src={image} alt="post" className='w-full max-h-[500px] rounded-sm'/>
        </div>
    );
};

export default Post;