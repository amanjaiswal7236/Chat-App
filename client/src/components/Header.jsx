import React from 'react';
import {Link} from 'react-router-dom';
function Header() {
    return (
        <div className="bg-[#121212]">
            <header className="fixed top-0 z-10 mx-auto flex w-full max-w-full items-center justify-between border-b-[1px] border-b-slate-300 bg-[#121212] p-4 text-white lg:px-10">
                {/* Logo and Title */}
                <div className="flex items-center gap-2">
                    <img src="/icons8-snow-app.svg" alt="Logo" className="h-8 sm:h-10" />
                    <h1 className="text-xl font-extrabold md:text-3xl">Chat App</h1>
                </div>
                
                {/* Register Button */}
                <div className="flex w-max flex-shrink-0 items-center justify-end gap-6">
                    <Link to="/login" className="w-max items-center justify-center border-[1px] border-white p-3 text-center font-bold text-white md:inline-flex">Login</Link>
                    <Link to="/register" className="w-max items-center justify-center bg-white p-3 text-center font-bold text-black md:inline-flex">Register</Link>
                </div>
            </header>
        </div>
    );
}

export default Header;
