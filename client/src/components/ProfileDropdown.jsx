import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProfileDropdown({ currentUser }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button onClick={toggleDropdown} className="w-max items-center justify-center border-[1px] border-white p-3 text-center font-bold text-white md:inline-flex">
                Profile
            </button>
            {isOpen && (
                <div className="absolute top-full right-0 bg-white border border-gray-200 shadow-lg rounded-md">
                    <div className="p-4">
                        <div className="flex items-center mb-2">
                            <img src={currentUser.profilePicture} alt="Profile" className="w-8 h-8 rounded-full mr-2" />
                            <p className="text-black">{currentUser.username}</p>
                        </div>
                        <p className="text-black">{currentUser.firstname} {currentUser.lastname}</p>
                        <p className="text-black">{currentUser.email}</p>
                        <Link to="/edit-profile" className="block mt-2 text-sm text-blue-500 hover:underline">Edit Profile</Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProfileDropdown;
