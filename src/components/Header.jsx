import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope, faHouse, faUser, faMoon, faSun, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    const [darkMode, setDarkMode] = useState(localStorage.theme === "dark" ? true : false)

    const switchMode = () => {
        setDarkMode(!darkMode)
        if(document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "Light")
            return;
        }
        document.documentElement.classList.add("dark")
        localStorage.setItem("theme", "dark")
        
    }

    const user = JSON.parse(localStorage.user)

    return (
        <div className='flex justify-between items-center px-8 h-[65px] border-b sticky top-0 z-30 dark:bg-[#212121] dark:border-[#616161]'>
            <div className='flex gap-6 items-center dark:border-[#616161]'>
                <Link to="/" className='text-cyan-700 text-xl font-bold mr-4'>
                    Voter
                </Link>
                <FontAwesomeIcon icon={faHouse} className=' dark:text-white' />
                { !darkMode && <FontAwesomeIcon icon={faMoon} className='text-black' onClick={switchMode} />}
                { darkMode && <FontAwesomeIcon icon={faSun} className='dark:text-white' onClick={switchMode}/>}
                <div className='border flex items-center w-[400px] dark:border-[#616161]'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='dark:text-white m-2' />
                    <input type="text" name='search' placeholder='Search' className='flex-1 p-1 dark:bg-[#212121]'/>
                </div>
            </div>
            <div className='flex gap-4 items-center' id="modeSwitch">
                <FontAwesomeIcon icon={faUser}  className='dark:text-white'/> 
                <FontAwesomeIcon icon={faEnvelope} className='dark:text-white fa-lg' />                
                <FontAwesomeIcon icon={faBell} className='dark:text-white fa-lg' />
                <div className='rounded-full border w-10 h-10 flex justify-center items-center dark:border-[#616161]'>
                    <img src={user.image} alt="pfp" className='w-full h-full'/>
                </div>
                <span className='font-semibold'>
                    {user.name}
                </span>
            </div>
        </div>
    );
};

export default Header;