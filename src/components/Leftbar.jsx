import React from 'react';
import Settingscard from './components/Settingscard';

import { menu, shortcuts, others } from '../../data'

const Leftbar = () => {

    const MENU = menu.map((menu) => {
        return(<Settingscard key={menu.title} data={menu} />)
    })

    const SHORTCUTS = shortcuts.map((shortcut) => {
        return <Settingscard key={shortcut.title} data={shortcut} />
    })

    const OTHERS = others.map((other) => {
        return <Settingscard key={other.title} data={other} />
    })

    return (
        <div className='min-w-[300px] p-4 flex flex-col gap-6 sticky top-[65px] stick-height overflow-scroll no-scrollbar'>
            <div className='flex flex-col gap-3'>
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