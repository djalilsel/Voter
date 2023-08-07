import React from 'react';
import { Outlet, redirect } from 'react-router';
import Header from './Header';
import Leftbar from './Leftbar';
import Rightbar from './Rightbar';

export function loader() {
    const user = localStorage.user
    if(!user){
        return redirect("/login")
    }
    return null;
}

const Layout = () => {

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
    



    return (
        <div className='dark:bg-[#212121] border-none dark:text-white'>
            <Header/>
            <div className='flex justify-center z-20'>
                <Leftbar />
                <Outlet/>
                <Rightbar />
            </div>
        </div>
    );
};

export default Layout;