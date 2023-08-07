import React from "react"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Layout, { loader } from "./components/Layout"
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Login from './pages/login/Login'
import Register from "./pages/register/Register"
import Notfound from "./pages/Notfound"


function App() {


  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} loader={loader}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Notfound />} />
    </>
      
  ))


  return (
      <RouterProvider router={router} />
  )
}

export default App
