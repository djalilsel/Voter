import React from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { users, posts } from '../../../data';
import Post from '../../components/components/Post';

const Profile = () => {

    const { id } = useParams()
    const { background, image, name } = users[Number(id - 1)]
    const POSTS = posts.map((post) => {
        if(post.publisher === name){
            return (
                <Post 
                    key={post.name} 
                    pfp={post.pfp} 
                    image={post.image} 
                    publisher={post.publisher}
                    publisherUrl={post.publisherUrl}
                    postUrl={post.postUrl}
                    description={post.description}
                />)
        }
    })

    return (
        <div className='flex-1 dark:bg-[#535353] relative flex flex-col'>
            <img src={background} alt="bg" />
            <div className='self-center relative top-[-40px] z-30'>
                <img src={image} alt="pfp" className='w-24 h-24' />
            </div>
            <div className='px-8'>
                <div className='text-center border shadow-lg relative top-[-80px] pt-16 px-6 pb-6 z-0 dark:bg-[#212121] dark:border-[#616161]'>
                    <span>{name}</span> <br /><br />
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