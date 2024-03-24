import React from 'react';
import useGetConversationUser from '../hooks/useGetConversationUser';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedUser } from '../redux/user/conversationSlice';

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


function ConversationList() {
    const { loading, conversations } = useGetConversationUser();
    const selectedUser = useSelector(state => state.conversation.selectedUser);

    const dispatch = useDispatch();

    const handleConversationClick = (conversation) => {
        dispatch(setSelectedUser(conversation));
        console.log('Selected Conversation:', conversation);
    };

    return (
        <ul className="flex h-[calc(100%-140px)] w-full flex-col items-start justify-start divide-y-[1px] divide-white overflow-y-auto md:h-[calc(100%-73px)]">
            {loading ? (
                <p>Loading...</p>
            ) : (
                conversations && conversations.length > 0 ? (
                    conversations.map(conversation => (
                        <li key={conversation._id}
                            className={`w-full cursor-pointer p-4 hover:bg-[#232323] md:p-6 ${selectedUser === conversation ? 'bg-gray-700' : ''}`}
                            onClick={() => handleConversationClick(conversation)}
                        >
                            <div className="flex w-full items-start justify-start gap-3 md:gap-4">
                                <img
                                    className="flex aspect-square h-10 w-10 flex-shrink-0 rounded-full object-cover"
                                    src={conversation.profilePicture || "https://via.placeholder.com/150"}
                                    alt="avatar" />
                                <div className="flex w-full flex-col items-start justify-start gap-1 truncate text-ellipsis">
                                    <div className="flex w-full items-center justify-between text-[10px] md:text-xs">
                                        <p className="text-gray-400">{conversation.username}</p>
                                        <p className="text-gray-400">{extractTime(conversation.updatedAt)}</p>
                                    </div>
                                    {/* Make sure to access the conversation properties safely */}
                                    <p className="text-xs text-white md:text-sm">{conversation.message}</p>
                                </div>
                            </div>
                        </li>
                    ))
                ) : (
                    <p>No conversations found.</p>
                )
            )}
        </ul>
    );
}

export default ConversationList;
