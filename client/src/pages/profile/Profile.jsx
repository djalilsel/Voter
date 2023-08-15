import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import Post from '../../components/components/Post';
import axios from 'axios';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {

    const navigate = useNavigate()
    const urlId = useParams()

    const { id } = useParams()
    const [data, setData] = useState({})
    const [posts, setPosts] = useState([])
    const [showEditProfile, setShowEditProfile] = useState(false)
    const [showProfileOptions, setShowProfileOptions] = useState(false)
    const [confirmDelete, setConfirmDelete] = useState(false)
    const [profileEdit, setProfileEdit] = useState({
        name: "",
        profilePicture: "",
        bgImg: ""
    })

    useEffect(() => {

        async function fetchData() {
            try{
                const res = await axios.get(`http://localhost:8800/api/user/find/${id}`)
                setData(res.data[0])
            } catch (err){
                return navigate("/")
            }
        }
        async function fetchPosts() {
            try{
                const res = await axios.get(`http://localhost:8800/api/posts/userposts/${id}`)
                setPosts(res.data)
            } catch (err){
                console.log("no posts")
            }
        }

        fetchData()
        fetchPosts()
    }, [urlId])


    const toggleProfileOptions = () => {
        setShowProfileOptions(!showProfileOptions)
        disableBodyScroll(document.getElementsByName('body'))
    }

    const handleProfileChange = (e) => {
        setProfileEdit(prevProfile => ({...prevProfile, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try{
            await axios.post(`http://localhost:8800/api/user/update/${id}`, profileEdit)
            setShowEditProfile(false)
            window.location.reload()
        } catch(err) {
            console.log(err)
        }
    }

    const initialDelete = () => {
        setShowProfileOptions(false)
        setConfirmDelete(true)
    }

    const deleteAccount = async () => {
        try{
            await axios.post(`http://localhost:8800/api/user/delete/${id}`)
            localStorage.removeItem("user")
            return navigate("/login")
        } catch(err) {
            console.log(err)
        }
    }

    const cancelDelete = () => {
        setConfirmDelete(false)
        enableBodyScroll(document.getElementsByName("body"))
    }

    const POSTS = posts.map((post) => {
        return (
            <Post 
                key={post.id} 
                id={post.id}
                creatorId={post.creator_id}
                image={post.image} 
                description={post.description}
                createDate={post.create_date}
            />)
    })

    return (
        <div className='flex-1 dark:bg-[#535353] flex flex-col'>
            <img src={data.background_image} alt="bg" className='h-60'/>
            <div className='self-center relative top-[-40px] z-30'>
                <img src={data.pfp} alt="pfp" className='w-28 h-28 rounded-full' />
            </div>
            <div className='px-8'>
                <div className='text-center border shadow-lg relative top-[-80px] pt-16 px-6 pb-6 z-0 dark:bg-[#212121] dark:border-[#616161]'>
                    <FontAwesomeIcon icon={faEllipsis} className='dark:text-white absolute top-3 left-4 fa-xl cursor-pointer' onClick={toggleProfileOptions}/>
                    {showProfileOptions && <div className='dark:bg-[#303030] h-24 w-28 absolute top-5 left-10 flex flex-col gap-6 p-3'>
                        <div className='text-sm cursor-pointer' onClick={() => setShowEditProfile(true)}>
                            Edit Profile
                        </div>
                        <div className='text-sm cursor-pointer' onClick={initialDelete}>
                            Delete Profile
                        </div>
                    </div>}
                    <span>{data.name}</span> <br /><br />
                    <span className='bg-cyan-700 p-2 rounded-md font-semibo text-white'>Follow</span>
                    <div className='flex gap-4 justify-center absolute top-2 right-2'>
                        <FontAwesomeIcon icon={faFacebook} className="dark:text-white text-blue-700 fa-2xl" />
                        <FontAwesomeIcon icon={faInstagram} className="dark:text-white text-purple-800 fa-2xl" />
                        <FontAwesomeIcon icon={faTwitter} className="dark:text-white text-blue-700 fa-2xl" />
                        <FontAwesomeIcon icon={faLinkedin} className="dark:text-white text-blue-900 fa-2xl" />
                    </div>
                </div>
                <div className='top-[-40px]'>
                    {POSTS}
                </div>
                {(showEditProfile || confirmDelete) && <div className='z-40 absolute top-0 right-0 h-screen w-screen bg-slate-100 dark:bg-[rgba(83,83,83,0.7)] flex justify-center items-center' >
                    {showEditProfile && <div className='bg-[#c9c9c9] dark:bg-[#212121] h-[600px] w-[500px] px-8 py-16 flex flex-col gap-8'>
                        <input type="text" name="name" value={profileEdit.name} onChange={handleProfileChange} placeholder='Change Your Name'  className='bg-[#c9c9c9] dark:bg-[#212121] border border-slate-500 p-2 rounded-md'/>
                        <input type="text" name="profilePicture" value={profileEdit.profilePicture} onChange={handleProfileChange} placeholder='Change Your Profile Picture'  className='bg-[#c9c9c9] dark:bg-[#212121] border border-slate-500 p-2 rounded-md'/>
                        <input type="text" name="bgImg" value={profileEdit.bgImg} onChange={handleProfileChange} placeholder='Change Your Background Image'  className='bg-[#c9c9c9] dark:bg-[#212121] border border-slate-500 p-2 rounded-md'/>
                        <input type="text" name="description" value="" placeholder='Change Your Description (Under Development)' className='bg-[#c9c9c9] dark:bg-[#212121] border border-slate-500 p-2 rounded-md'/>
                        <button type='submit' className='self-end border border-slate-500 px-4 py-2 rounded-lg bg-[#535353]' onClick={handleSubmit}>
                            Edit
                        </button>
                    </div>}
                    {confirmDelete && <div className='bg-[#c9c9c9] dark:bg-[#212121] h-[200px] w-[500px] px-8 py-8  gap-8'>
                        <span>
                            Please Click on Confirm if you want to delete your account.
                            You can go back by clicking on Cancel.
                        </span>
                        <div className='flex justify-end mt-10 gap-6'>
                            <button type='submit' className='h-fit border border-slate-500 px-4 py-2 rounded-lg bg-[#535353]' onClick={cancelDelete}>
                                Cancel
                            </button>
                            <button type='submit' className='h-fit border border-slate-500 px-4 py-2 rounded-lg bg-[#535353]' onClick={deleteAccount}>
                                Delete
                            </button>
                        </div>
                    </div>}
                </div>}
            </div>
        </div>
    );
};

export default Profile;