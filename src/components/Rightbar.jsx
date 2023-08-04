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
        <div className='min-w-[400px] p-4 flex flex-col gap-6 sticky top-[65px] stick-height overflow-scroll bg-[#8f8d9] no-scrollbar'>
            <div className='border px-4 pt-3 pb-6 flex flex-col gap-4 shadow-lg'>
                <span className='text-slate-600'>Suggested for you</span>
                {FRIENDSUGGESTIONS}
            </div>
            <div className='border px-4 pt-3 pb-6 flex flex-col gap-4 shadow-lg'>
                <span className='text-slate-600'>Hotest Votes</span>
                {HOTTESTVOTES}
            </div>
        </div>
    );
};

export default Rightbar;