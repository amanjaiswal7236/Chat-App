import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function EditProfile() {
    const [inputs, setInputs] = useState({ firstname: '', lastname: '', username: '', email: '', password: '' });
    const { currentUser } = useSelector(state => state.user);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission
        setLoading(true);
        // Simulate API call or other async operation
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-[#121212]">
            <header className="fixed top-0 z-10 mx-auto flex w-full max-w-full items-center justify-between border-b-[1px] border-b-slate-300 bg-[#121212] p-4 text-white lg:px-10">
                <h1 className="text-xl font-extrabold md:text-3xl">Edit Profile</h1>
                <div className="flex w-max flex-shrink-0 items-center justify-end gap-6">
                    <Link to="/logout" className="w-max items-center justify-center bg-white p-3 text-center font-bold text-black md:inline-flex">Logout</Link>
                </div>
            </header>
            <form onSubmit={handleSubmit}>
                    <div className="mx-auto flex w-full items-stretch justify-between gap-10">
                        <div className="fixed left-0 top-0 hidden h-screen w-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:block md:w-1/3"></div>
                        <div className="ml-auto mt-28 flex w-full flex-col items-start justify-start p-6 sm:max-w-4xl md:w-2/3 lg:px-10">
                            <div className="w-full text-center">
                                <h1 className="mb-3 text-5xl font-extrabold text-white">Edit Profile</h1>
                                <p className="text-xs text-slate-400">Want to, update your account</p>
                            </div>
                            <div className="my-14 flex w-full flex-col items-start justify-start gap-4">
                                <div className="flex w-full items-center justify-center">
                                    <input
                                        id="avatar-input-1"
                                        hidden={true}
                                        type="file" />
                                    <label
                                        htmlFor="avatar-input-1"
                                        className="relative flex aspect-square h-24 w-24 cursor-pointer items-center justify-center overflow-visible rounded-full border-4 border-[#ae7aff] p-1">
                                        <div className="flex h-full w-full items-center justify-center rounded-full">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                                className="h-8 w-8 text-white">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 4.5v15m7.5-7.5h-15"></path>
                                            </svg>
                                        </div>
                                        <span className="absolute bottom-0 right-0 flex aspect-square h-5 w-5 items-center justify-center rounded-full bg-[#ae7aff] p-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                                className="h-3 w-3 text-black">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 4.5v15m7.5-7.5h-15"></path>
                                            </svg>
                                        </span>
                                    </label>
                                </div>
                                <div className="mt-10 flex w-full flex-col items-center justify-between gap-4 md:flex-row">
                                    <div className="flex w-full flex-col items-start justify-start gap-2">
                                        <label className="text-xs text-slate-200">First name</label>
                                        <input
                                            value={inputs.firstname}
                                            defaultValue={currentUser.firstname}
                                            onChange={(e) => setInputs({ ...inputs, firstname: e.target.value })}
                                            placeholder={currentUser.firstname}
                                            autoComplete="false"
                                            className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500" />
                                    </div>
                                    <div className="flex w-full flex-col items-start justify-start gap-2">
                                        <label className="text-xs text-slate-200">Last name</label>
                                        <input
                                            value={inputs.lastname}
                                            defaultValue={currentUser.lastname}
                                            onChange={(e) => setInputs({ ...inputs, lastname: e.target.value })}
                                            placeholder="Enter your last name..."
                                            autoComplete="false"
                                            className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500" />
                                    </div>
                                </div>
                                <div className="flex w-full flex-col items-start justify-start gap-2">
                                    <label className="text-xs text-slate-200">Username</label>
                                    <input
                                        value={inputs.username}
                                        defaultValue={currentUser.username}
                                        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                                        placeholder="Enter a username..."
                                        autoComplete="false"
                                        className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500" />
                                </div>
                                <div className="flex w-full flex-col items-start justify-start gap-2">
                                    <label className="text-xs text-slate-200">Email</label>
                                    <input
                                        value={inputs.email}
                                        defaultValue={currentUser.email}
                                        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                                        placeholder="Enter your email..."
                                        autoComplete="false"
                                        className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500" />
                                </div>
                                <div className="flex w-full flex-col items-start justify-start gap-2">
                                    <label className="text-xs text-slate-200">Password</label>
                                    <input
                                        value={inputs.password}
                                        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                                        placeholder="Enter a password..."
                                        autoComplete="false"
                                        type="password"
                                        className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500" />
                                </div>
                                
                                <button
                                    className="w-full mt-9 bg-[#ae7aff] p-3 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]" disabled={loading}>
                                    {loading ? 
                                        <>
                                            <Spinner size="sm"/>
                                            <span className="ml-2">Creating Account...</span>
                                        </>
                                    : 'Update Account'}
                                </button>
                                
                            </div>
                        </div>
                    </div>

                </form>
        </div>
    );
}

export default EditProfile;
