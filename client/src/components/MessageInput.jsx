import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import EmojiPicker from 'emoji-picker-react';

function MessageInput() {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser);
    const selectedUser = useSelector(state => state.conversation.selectedUser);

    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        try {
            // Set loading state
            setLoading(true);
            const response = await axios.post(`/api/message/send/${selectedUser._id}`, { message });
            dispatch({ type: 'ADD_MESSAGE', payload: response.data });
            setMessage("");
            console.log(response.data);
        } catch (error) {
            console.error("Error sending message:", error);
        } finally {
            setLoading(false);
        }
    };


    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    return (
        <form className='mt-2' onSubmit={handleSendMessage}>
            <div className="relative">
                {showEmojiPicker && <EmojiPicker
                    onEmojiClick={(event, emojiObject) => setMessage(message + emojiObject.emoji)}
                    disableSkinTonePicker={true}
                    theme='dark'
                    emojiStyle='apple'
                    width={window.innerWidth > 768 ? '300px' : '100%'}
                    pickerStyle={{ position: 'absolute', bottom: '40px', right: '0' }}
                />}
            </div>
            <div className="sticky top-full flex w-full items-center justify-start gap-1 border-t-[1px] border-white px-4 py-2 md:gap-4 md:border-[1px] md:shadow-[5px_5px_0px_0px_#4f4e4e]">
                <img
                    className="hidden aspect-square h-5 w-5 flex-shrink-0 rounded-full object-cover md:flex md:h-10 md:w-10"
                    src={currentUser.profilePicture ? currentUser.profilePicture : 'https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login'}
                    alt="avatar" />
                <input
                    placeholder="Message..."
                    className="w-full bg-transparent p-2 text-sm text-white !outline-none placeholder:text-gray-500 md:p-4 md:text-base"
                    value={message}
                    onChange={handleChange}
                />
                <button className="hidden h-5 w-5 flex-shrink-0 items-center justify-center p-1 md:flex md:h-10 md:w-10" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-6 w-6 text-white">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"></path>
                    </svg>
                </button>
                <button className="flex h-7 w-7 flex-shrink-0 items-center justify-center p-1 md:h-10 md:w-10">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-6 w-6 text-white">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"></path>
                    </svg>
                </button>
                <button type='submit' className="flex h-7 w-7 flex-shrink-0 items-center justify-center bg-[#ae7aff] p-1 md:h-10 md:w-10">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-6 w-6 text-black">
                        <path
                            d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z"></path>
                    </svg>
                </button>
            </div>
        </form>
    )
}

export default MessageInput;
