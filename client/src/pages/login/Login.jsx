import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {

    const [input, setInput] = useState({
        username: "",
        password: ""
    })
    const [error, setError] = useState(null)    
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const res = await axios.post("http://localhost:8800/api/auth/login", input, {
                withCredentials: true,
              })
            setError(null)
            localStorage.setItem("user", JSON.stringify(res.data))
            navigate("/")
        } catch(err){
            setError(err.response.data)
        }

    }

    const handleChange = (e) => {
        e.preventDefault()
        setInput(prevInput => ({...prevInput, [e.target.name]: e.target.value}))
    }

    const togglePassword = () => {
        setShowPassword(!showPassword)
        const input = document.querySelector(".passwordInput")
        if(input.type === "password"){
            input.type = "text"
        } else {
            input.type = "password"
        }
    }

    return (
        <div className="h-screen bg-background-purple flex justify-center items-center">
            <div className="w-[700px] h-[500px] rounded-xl bg-white flex justify-stretch">
                <div className="login-bg flex-1 rounded-l-xl text-white flex justify-center items-center">
                    <div className="max-w-[250px]">
                        <h1 className="text-6xl mb-14">Welcome to Voter.</h1>
                        <p className="mb-6">Please Login to your account.</p>
                        <p className="mb-4">Don't have an account?</p>
                        <Link to='/register' className="inline-block bg-white p-2 w-40 text-center text-[#161616] font-semibold ">
                            Register
                        </Link>
                    </div>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                        <h1 className="text-4xl mb-10 ml-4 font-bold text-slate-600">Login</h1>
                        <div className="ml-4 w-11/12 flex flex-col" onSubmit={handleSubmit}>
                            <input name="username" value={input.username} onChange={handleChange} type="text" placeholder="Username" className="focus:outline-none border-b p-2 border-slate-400 h-14 " />
                            <div className='relative flex felx-col mb-1'>
                                {!showPassword && <FontAwesomeIcon icon={faEye} className='absolute top-6 right-2 cursor-pointer' onClick={togglePassword}/>}
                                {showPassword && <FontAwesomeIcon icon={faEyeSlash} className='absolute top-6 right-[7px] cursor-pointer' onClick={togglePassword}/>}
                                <input name="password" value={input.password} onChange={handleChange} type="password" placeholder="Password" className="flex-1 focus:outline-none border-b p-2 border-slate-400 h-14 passwordInput" />
                            </div>
                            { error && <p className="pt-2 text-red-700">{error}</p>}
                            <div className="flex justify-between items-center w-full mt-8 ">
                                <button className="text-white bg-background-purple inline-block w-40 p-2" type="submit" onClick={handleSubmit}>
                                    Login
                                </button>
                                <Link className="text-xs underline text-purple-600 cursor-pointer" to={"/recovery"}>Forget Credentials?</Link>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Login;