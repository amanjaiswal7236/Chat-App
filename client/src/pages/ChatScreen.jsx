import React from 'react'
import ChatHeader from '../components/ChatHeader'
import SearchFilter from '../components/SearchFilter'
import ConversationList from '../components/ConversationList'
import RecevierInfo from '../components/RecevierInfo'
import MessageInput from '../components/MessageInput'
import Messages from '../components/Messages'

function ChatScreen() {
    return (
        <>
            <div className="bg-[#121212]">
                {/* HEADER SECTION */}
                <ChatHeader />
                <div className="mt-[77px] flex h-[calc(100vh-77px)] w-full items-center justify-center overflow-hidden p-0 md:mt-[83px] md:h-[calc(100vh-83px)]">

                    <div className="fixed right-full top-[77px] z-10 h-full w-full border-white bg-[#121212] transition-all duration-300 ease-in-out peer-focus:right-0 md:static md:block md:w-[30%] md:border-r-[1px]">
                        {/* USER SEARCH AND FILTER */}
                        <SearchFilter />
                        {/* LIST OF USER CONVERSATIONS */}
                        {/* render conversation list if there are conversations */}

                        <ConversationList />
                    </div>
                    {/* CHAT SECTION */}
                    <div className="h-full w-full md:w-[70%]">
                        {/* CHAT PERSON DETAILS */}
                        <RecevierInfo />
                        <div className="relative h-[calc(100vh-150px)] w-full p-0 md:h-[calc(100vh-158px)] md:p-4">
                            <Messages />
                            {/* MESSEGE INPUT FIELD */}
                            <MessageInput />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ChatScreen