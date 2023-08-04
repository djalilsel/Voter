import React from 'react';
import { Outlet, redirect } from 'react-router';
import Header from './Header';
import Leftbar from './Leftbar';
import Rightbar from './Rightbar';

export function loader() {
    const logged = true
    if(!logged){
        return redirect("/login")
    }
    return null;
}

const Layout = () => {
    return (
        <div>
            <Header />
            <div className='flex justify-center'>
                <Leftbar />
                <Outlet/>
                <Rightbar />
            </div>
        </div>
    );
};

export default Layout;