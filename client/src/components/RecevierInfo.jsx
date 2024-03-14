import React from 'react'
import { useSelector } from 'react-redux'

function RecevierInfo() {
    const selectedUser = useSelector(state => state.conversation.selectedUser);

    return (
        <div className="flex w-full items-center justify-between gap-2 border-b-[1px] border-white p-4">
            <div className="flex w-full items-center justify-start gap-3">
                <button className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center border-[1px] border-white p-1 md:hidden md:h-10 md:w-10">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5 text-white">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"></path>
                    </svg>
                </button>
                <img
                    className="flex aspect-square h-10 w-10 flex-shrink-0 rounded-full object-cover"
                    src={selectedUser ? selectedUser.profilePicture || "https://via.placeholder.com/150" : "https://via.placeholder.com/150"}
                    alt="avatar" />
                <p className="font-semibold text-white">{selectedUser ? selectedUser.username : "No user selected"}</p>
            </div>
            <div className="flex items-center justify-end gap-4">
                <button className="hidden h-10 w-10 flex-shrink-0 items-center justify-center border-[1px] border-white p-1 md:inline-flex">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5 text-white">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"></path>
                    </svg>
                </button>
                <button className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center border-[1px] border-white p-1 md:h-10 md:w-10">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5 text-white">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default RecevierInfo