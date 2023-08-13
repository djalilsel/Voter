import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="h-screen bg-background-purple flex justify-center items-center">
            <div className="w-[700px] h-[500px] rounded-xl bg-white flex justify-stretch">
                <div className="flex-1 flex flex-col justify-center">
                        <h1 className="text-3xl mb-10 ml-6 font-bold text-slate-500">Register</h1>
                        <form action="register" className="mx-6 w-10/12 flex flex-col">
                            <input name="username" type="text" placeholder="Username" className="focus:outline-none border-b p-2 border-slate-400 h-14 mb-1" />
                            <input name="email" type="email" placeholder="Email" className="focus:outline-none border-b p-2 border-slate-400 h-14 mb-1" />
                            <input name="password" type="password" placeholder="Password" className="focus:outline-none border-b p-2 border-slate-400 h-14 mb-1" />
                            <input name="name" type="text" placeholder="Name" className="focus:outline-none border-b p-2 border-slate-400 h-14 mb-1" />
                            <button className="text-white bg-background-purple mt-8 inline-block w-40 p-2">
                                Register
                            </button>
                        </form>
                </div>
                <div className="register-bg flex-1 rounded-r-xl text-white flex justify-center items-center">
                    <div className="max-w-[250px]">
                        <h1 className="text-6xl mb-14">Welcome to Voter.</h1>
                        <p className="mb-6">You can create you personal account now!!<br /> And it's completely Free!</p>
                        <p className="mb-4">Don you have an account?</p>
                        <Link to='/login' className="inline-block bg-white p-2 w-40 text-center text-[#161616] font-semibold ">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;