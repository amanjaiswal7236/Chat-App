import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/user/conversationSlice";
import toast from "react-hot-toast";

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser); // Assuming your user slice is named 'user'
    const selectedUser = useSelector(state => state.conversation.selectedUser);

    const sendMessage = async (message) => {
        setLoading(true);
        try {
            // Ensure a user is selected
            if (!selectedUser) {
                throw new Error("No user selected");
            }

            // Simulate sending message to the selected user
            // Replace this with your actual API call
            const simulatedResponse = { 
                message: message, 
                senderId: currentUser._id, 
                receiverId: selectedUser._id 
            };
            console.log("Sending message:", simulatedResponse);
            // Dispatch the addMessage action to update the messages array in the Redux store
            dispatch(addMessage(simulatedResponse));

            // Clear loading state if the message is sent successfully
            setLoading(false);
        } catch (error) {
            // Display error message using toast
            console.error(error);
            toast.error(error.message);
            setLoading(false); // Clear loading state on error
        }
    };

    return { sendMessage, loading };
};

export default useSendMessage;
