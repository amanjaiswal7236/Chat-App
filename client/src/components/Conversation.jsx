import React from 'react';
import useConversation from "../zustand/useConversation.js";

function Conversation({ conversation, lastIdx }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;

  return (
    <div className="fixed right-full top-[77px] z-10 h-full w-full border-white bg-[#121212] transition-all duration-300 ease-in-out peer-focus:right-0 md:static md:block md:w-[30%] md:border-r-[1px]">
      {/* Render search input only for the first conversation */}
      
      {/* Render individual conversation items */}
      <ul className="flex h-[calc(100%-140px)] w-full flex-col items-start justify-start divide-y-[1px] divide-white overflow-y-auto md:h-[calc(100%-73px)]">
        <li className="w-full cursor-pointer p-4 hover:bg-[#232323] md:p-6" onClick={() => setSelectedConversation(conversation)}>
          <div className="flex w-full items-start justify-start gap-3 md:gap-4">
            <img
              className="flex aspect-square h-10 w-10 flex-shrink-0 rounded-full object-cover"
              src={conversation.profilePicture}
              alt="avatar"
            />
            <div className="flex w-full flex-col items-start justify-start gap-1 truncate text-ellipsis">
              <div className="flex w-full items-center justify-between text-[10px] md:text-xs">
                <p className="text-gray-400">{conversation.username}</p>
                <p className="text-gray-400">4 weeks ago</p> {/* Assuming you don't have this information in your conversation object */}
              </div>
              <p className="text-xs text-white md:text-sm">I have some big news! Guess what? I'm getting married next month!</p> {/* Sample text */}
            </div>
          </div>
        </li>
      </ul>
      {/* Render divider only if it's not the last conversation */}
      {!lastIdx && <div className='divider my-0 py-0 h-1' />}
    </div>
  );
}

export default Conversation;
