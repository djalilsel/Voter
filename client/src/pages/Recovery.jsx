import React from "react";
import { Link } from "react-router-dom";

const Recovery = () => {
    return(
    <div className="h-screen bg-background-purple flex justify-center items-center">
        <div className="w-[700px] h-[500px] rounded-xl bg-white flex flex-col items-center py-12 px-6">
            <h1 className="text-center text-xl font-bold mb-4">
                What did you forget?
            </h1>
            <div className="flex flex-1 w-full">
                <div className="flex-1 border-r-2 p-2 flex flex-col gap-4">
                    <span>
                        This is the section to recover you username,
                        remember usernames are changed once do it carfully.
                    </span>
                    <div role="alert">
                        <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">Notice: </div>
                        <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                            BTW if you want to change it more than one time just call me.
                        </div>
                    </div>
                    <Link to="username" className="bg-green-400 w-fit py-1 px-2 rounded-md text-white font-semibold">
                        Recover Please
                    </Link>
                </div>
                <div className="flex-1 border-l-2 p-2 flex flex-col gap-4">
                    <span>
                        This is the section to recover you password,
                        You have unlimited password recoverys but don't abuse it Pls :)
                    </span>
                    <div role="alert">
                        <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">Notice: </div>
                        <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                            It you recover your password more than two times i will delete your account.
                        </div>
                    </div>
                    <Link to="password" className="bg-green-400 w-fit py-1 px-2 rounded-md text-white font-semibold">
                        Recover Please
                    </Link>
                </div>
            </div>
            
        </div>
    </div>
    )
}

export default Recovery;