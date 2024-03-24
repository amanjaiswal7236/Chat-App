import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useSocketContext } from '../context/SocketContext';

function extractTime(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;

    // Calculate time difference in minutes
    const diffMins = Math.round(diffMs / (1000 * 60));

    if (diffMins < 1) {
        return 'just now';
    } else if (diffMins < 60) {
        return `${diffMins} minute${diffMins === 1 ? '' : 's'} ago`;
    } else if (diffMins < 24 * 60) {
        const hours = Math.floor(diffMins / 60);
        return `${hours} hour${hours === 1 ? '' : 's'} ago`;
    } else if (diffMins < 48 * 60) {
        return 'yesterday';
    } else {
        const days = Math.floor(diffMins / (24 * 60));
        return `${days} day${days === 1 ? '' : 's'} ago`;
    }
}

function Messages() {
    const { socket } = useSocketContext();

    const currentUser = useSelector(state => state.user.currentUser);
    const selectedUser = useSelector(state => state.conversation.selectedUser);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                console.log('Fetching messages...');
                if (!currentUser) {
                    console.log('No current user');
                    return;
                }
                const response = await axios.get(`/api/message/${selectedUser._id}`);
                console.log('Messages fetched:', response.data);
                setMessages(response.data);
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };

        fetchMessages();
    }, [selectedUser, currentUser]);

    console.log('currentUser:', currentUser);
    console.log('selectedUser:', selectedUser);
    console.log('messages:', messages);

    // Filter messages based on sender and receiver
    const filteredMessages = messages.filter(message => (
        (message.receiverId === selectedUser._id && message.senderId === currentUser._id) ||
        (message.senderId === selectedUser._id && message.receiverId === currentUser._id)
    ));

    console.log('filteredMessages:', filteredMessages);

    useEffect(() => {
        // Check if socket is available before setting up the event listener
        if (socket) {
            const handleNewMessage = (newMessage) => {
                newMessage.shouldShake = true; // Assuming you need to add this property
                setMessages(prevMessages => [...prevMessages, newMessage]);
            };

            // Here you would set up your socket listener for "newMessage" event
            socket.on("newMessage", handleNewMessage);

            // Remember to return a cleanup function to remove the listener when component unmounts
            return () => {
                socket.off("newMessage", handleNewMessage);
            };
        }
    }, [socket, setMessages]);

    return (
        <div className="flex h-[calc(100%-53px)] w-full flex-col-reverse gap-8 overflow-y-auto px-2 py-4 md:h-[calc(100%-90px)] md:p-0">
            {filteredMessages.slice().reverse().map((message, index) => (
                <div key={index} className={`flex min-w-[150px] max-w-[80%] items-start justify-start gap-2 text-white md:max-w-[70%] ${message.senderId === currentUser._id ? 'ml-auto flex-row-reverse' : 'mr-0'}`}>
                    <img
                        className="flex aspect-square h-7 w-7 flex-shrink-0 rounded-full object-cover md:h-10 md:w-10"
                        src={message.senderId === currentUser._id ? currentUser.profilePicture : selectedUser.profilePicture}
                        alt="avatar"
                    />
                    <div className={`flex w-full flex-col gap-1 md:gap-2 ${message.senderId === currentUser._id ? 'items-end justify-end' : ''}`}>
                        <p className="text-[10px] md:text-xs">
                            {message.senderId === currentUser._id ? currentUser.name : selectedUser.name}
                            <span className="ml-2 text-gray-400">{extractTime(message.createdAt)}</span>
                        </p>
                        <div
                            className={`relative w-fit p-2 text-xs after:absolute after:top-0 after:border-t-[15px] after:border-t-[#121212] md:p-3 md:text-sm ${message.senderId === currentUser._id ? 'bg-[#ae7aff] after:right-0 after:border-l-[15px] after:border-l-transparent' : 'bg-[#343434] after:left-0 after:border-r-[15px] after:border-r-transparent'}`}
                        >
                            {message.message}
                        </div>
                        {/* Additional rendering for images sent by selected user */}
                        {message.senderId !== currentUser.id && message.images && (
                            <div className="grid w-full grid-cols-2 items-start justify-start gap-1 md:max-w-[90%] md:gap-2 ml-auto">
                                {message.images.map((image, index) => (
                                    <img
                                        key={index}
                                        className="flex aspect-video w-full flex-shrink-0 object-cover"
                                        src={image}
                                        alt="avatar"
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );

}

export default Messages;
