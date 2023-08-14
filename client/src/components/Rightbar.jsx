import React from 'react';
import Miniprofile from './components/Miniprofile';

import { friendSuggestions, hottestVotes } from '../../data'
import Hottestvotes from './components/Hottestvotes';

const Rightbar = () => {

    const FRIENDSUGGESTIONS = friendSuggestions.map((person) => {
        return <Miniprofile key={person.name} data={person} />
    })

    const HOTTESTVOTES = hottestVotes.map((vote) => {
        return <Hottestvotes key={vote.publisher} data={vote} /> 
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