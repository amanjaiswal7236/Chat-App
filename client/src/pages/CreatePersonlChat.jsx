import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import axios from 'axios';
import ChatHeader from '../components/ChatHeader';
import { useSelector } from 'react-redux';

function CreatePersonlChat() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');
    const currentUser = useSelector(state => state.user.currentUser);
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    const fetchUsers = async () => {
        try {
            const res = await axios.get('/api/users');
            setUsers(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleStartChatting = () => {
        if (selectedUser) {
            // Redirect to the chat page with the user IDs as URL parameters
            navigate(`/chat?user1=${currentUser}&user2=${selectedUser}`); // Use navigate instead of history.push
        }
    };

    return (
        <div>
            <div className="min-h-screen bg-[#121212]">
                <ChatHeader />
                <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-[#121212] bg-opacity-75 transition-opacity"></div>
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-0 text-center md:items-center md:p-2">
                            <div className="relative w-full transform overflow-hidden border-t-[1px] border-white bg-[#121212] text-left text-white transition-all md:my-8 md:w-full md:max-w-5xl md:border-[1px]">
                                <div className="flex items-center justify-between border-b-[1px] border-white p-4">
                                    <p className="text-xl font-bold">Create Chat</p>
                                    <Link to="/inbox">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="h-6 w-6 text-white"
                                            role="button"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </Link>
                                </div>
                                <div className="flex w-full flex-col gap-4 p-4 md:gap-6 md:p-6">
                                    <div className="flex w-full flex-col items-start justify-start gap-2">
                                        <label className="text-xs text-slate-200">Select a user</label>
                                        <div className="w-full border-[1px] border-white pr-4">
                                            <select
                                                value={selectedUser}
                                                onChange={(event) => setSelectedUser(event.target.value)}
                                                className="w-full bg-[#121212] py-4 pl-4 text-white placeholder:text-gray-500 focus:outline-none"
                                            >
                                                <option value="" disabled hidden>Select a user...</option>
                                                {users.map((user) => (
                                                    <option key={user._id} value={user._id}>{user.username}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="flex w-full flex-col items-center justify-end gap-4 md:flex-row md:gap-6">
                                        <Link
                                            to="/inbox"
                                            className="w-full bg-red-500 p-3 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]"
                                        >
                                            Cancel
                                        </Link>
                                        <button
                                            onClick={handleStartChatting}
                                            className="w-full bg-[#ae7aff] p-3 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]"
                                        >
                                            Start Chatting
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreatePersonlChat;
