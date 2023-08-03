import React from 'react';
import { Outlet, redirect } from 'react-router';
import Header from './Header';
import Leftbar from './Leftbar';
import Rightbar from './Rightbar';

export function loader() {
    const logged = false
    if(!logged){
        return redirect("/login")
    }
    return null;
}

const Layout = () => {
    return (
        <div>
            <Header />
            <Leftbar />
            <Outlet />
            <Rightbar />
        </div>
    );
};

export default Layout;