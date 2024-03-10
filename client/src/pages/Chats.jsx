import React from 'react'
import useGetConversations from '../hooks/useGetConversations'
import InboxHeader from '../components/InboxHeader'
import Conversations from '../components/Conversations'
import MessageContainer from '../components/MessageContainer'


function Chats() {
    const {loading, conversations} = useGetConversations()
    console.log(conversations)
    
    return (
        <div>
            <div className="">
                <InboxHeader />
                <div className="mt-[77px] h-[calc(100vh-77px)] w-full items-center justify-center overflow-hidden p-0 md:mt-[83px] md:h-[calc(100vh-83px)]">
                    <Conversations/>
                    <div className="h-full w-full md:w-[70%]">
                        <MessageContainer/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chats