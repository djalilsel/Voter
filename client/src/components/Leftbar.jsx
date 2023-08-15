import React from 'react';
import Settingscard from './components/Settingscard';

import { menu, shortcuts, others } from '../../data'
import { Link } from 'react-router-dom';

const Leftbar = () => {

    const user = JSON.parse(localStorage.user)


    const MENU = menu.map((menu) => {
        return(<Settingscard key={menu.title} icon={menu.icon} title={menu.title} link={menu.link}/>)
    })

    const SHORTCUTS = shortcuts.map((shortcut) => {
        return <Settingscard key={shortcut.title} icon={shortcut.icon} title={shortcut.title} link={shortcut.link} />
    })

    const OTHERS = others.map((other) => {
        return <Settingscard key={other.title} icon={other.icon} title={other.title} link={other.link} />
    })

    return (
        <div className='min-w-[300px] p-4 flex flex-col gap-6 sticky top-[65px] stick-height overflow-scroll no-scrollbar dark:bg-[#212121]'>
            <div className='flex flex-col gap-3'>
                <Link className='flex items-center font-medium gap-4 rounded-full' to={`/profile/${user.id}`}>
                    <img src={user.pfp} className='w-8 h-8 rounded-full'/>
                    <span>{user.name}</span>
                </Link>
                {MENU}
            </div>
            <hr />
            <div className='flex flex-col gap-3'>
                {SHORTCUTS}
            </div>            
            <hr />
            <div className='flex flex-col gap-3'>
                {OTHERS}
            </div>
        </div>
    );
};

export default Leftbar;