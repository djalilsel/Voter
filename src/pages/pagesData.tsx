import React from "react";
import { routerType } from "../types/router.types";
import Login from "./login/Login";
import Profile from "./profile/Profile";
import Home from "./home/Home";
import Register from "./register/Register";


const pagesData: routerType[] = [
    {
        path: "",
        element: <Home />,
        title: "home"
    },
    {
        path: "register",
        element: <Register />,
        title: "register"
    },
    {
        path: "login",
        element: <Login />,
        title: "login"
    },
    {
        path: "profile",
        element: <Profile />,
        title: "profile"
    },
];

export default pagesData