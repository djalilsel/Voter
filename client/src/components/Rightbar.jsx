import React, { useEffect, useState } from 'react';
import Miniprofile from './components/Miniprofile';

import Hottestvotes from './components/Hottestvotes';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Rightbar = () => {

    const { id } = JSON.parse(localStorage.user)

    const [suggestions, setSuggestions] = useState([])
    const [hottestVotes, setHottestVotes] = useState([])


    useEffect(() => {
        async function fetchSuggestions(){
            const res = await axios.get(`http://localhost:8800/api/user/suggestions/${id}`)
            setSuggestions(res.data)
            
        }
        fetchSuggestions()

        async function fetchHottestVotes(){
            const res = await axios.get("http://localhost:8800/api/posts/hottestvotes")
            setHottestVotes(res.data)
        }
        fetchHottestVotes()
    }, [])

    

    const FRIENDSUGGESTIONS = suggestions.map((user) => {
        return <Miniprofile key={user.id} name={user.name} pfp={user.pfp} id={user.id} />
    })


    const HOTTESTVOTES = hottestVotes.map((vote) => {
        return <Hottestvotes key={vote.id} id={vote.id} image={vote.image} creatorId={vote.creator_id} description={vote.description} /> 
    })

    return (
        <div className='w-[500px] h-full p-4 flex flex-col gap-6 sticky top-[65px] stick-height overflow-scroll dark:bg-[#535353] no-scrollbar'>
            <div className='border dark:border-[#616161] px-4 pt-3 pb-6 flex flex-col gap-4 shadow-lg dark:bg-[#212121]'>
                <span className='text-slate-600 dark:text-slate-300'>Suggested for you</span>
                {FRIENDSUGGESTIONS}
            </div>
            <div className='border dark:border-[#616161] px-4 pt-3 pb-6 flex flex-col gap-4 shadow-lg dark:bg-[#212121]'>
                <span className='text-slate-600 dark:text-slate-300'>Hotest Votes</span>
                {HOTTESTVOTES}
            </div>
        </div>
    );
};

export default Rightbar;