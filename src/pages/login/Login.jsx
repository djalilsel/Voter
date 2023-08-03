import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
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
                        <h1 className="text-4xl mb-10 ml-4">Login</h1>
                        <form action="Login" className="ml-4 w-11/12 flex flex-col">
                            <input name="username" type="text" placeholder="Username" className="focus:outline-none border-b p-2 border-slate-400 h-14 " />
                            <input name="password" type="password" placeholder="Password" className="focus:outline-none border-b p-2 border-slate-400 h-14 " />
                            <button className="text-white bg-background-purple mt-8 inline-block w-40 p-2">
                                Login
                            </button>
                        </form>
                </div>
            </div>
        </div>
    );
};

export default Login;