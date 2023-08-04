import React from 'react';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

const Header = () => {
    return (
        <div className='flex justify-between items-center bg-white px-8 h-[65px] border sticky top-0 z-20'>
            <div className='flex gap-6 items-center'>
                <Link to="/" className='text-cyan-700 text-xl font-bold mr-4'>
                    Voter
                </Link>
                <HomeOutlinedIcon />
                <DarkModeOutlinedIcon />
                <GridViewOutlinedIcon />
                <div className='border flex items-center w-[400px]'>
                    <SearchIcon className='m-1'/>
                    <input type="text" name='search' placeholder='Search' className='flex-1 p-1'/>
                </div>
            </div>
            <div className='flex gap-4 items-center'>
                <PermIdentityOutlinedIcon />
                <MailOutlinedIcon />
                <NotificationsOutlinedIcon />
                <div className='rounded-full border w-12 h-12 flex justify-center items-center'>
                    <img src="#" alt="pfp" />
                </div>
                <span className='font-semibold'>
                    Name
                </span>
            </div>
        </div>
    );
};

export default Header;