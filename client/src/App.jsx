import React from "react"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Layout, { loader } from "./components/Layout"
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Login from './pages/login/Login'
import Register from "./pages/register/Register"
import Recovery from "./pages/Recovery"
import Username from "./pages/Username"
import Password from "./pages/Password"
import Notfound from "./pages/Notfound"



function App() {


  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} loader={loader}>
        <Route index element={<Home />} />
        <Route path="profile/:id" element={<Profile />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/recovery" element={<Recovery />} />
      <Route path="/recovery/username" element={<Username />} />
      <Route path="/recovery/password" element={<Password />} />
      <Route path="*" element={<Notfound />} />
    </>
  ))


  return (
      <RouterProvider router={router} />
  )
}

export default App
