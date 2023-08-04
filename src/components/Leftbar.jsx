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
        <div className='p-4 min-w-[300px] flex flex-col gap-6 '>
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