import User from '../models/user.model.js';
import Conversation from '../models/conversation.model.js';

export const getUsers = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
        res.status(200).json(filteredUsers);

    } catch (error) {
        console.error("Error in getUsers: ", error.message)
        res.status(500).json({ message: error.message });
    }
};


export const conversationUsers = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;

        // Find all conversations where the current user is a participant
        const conversations = await Conversation.find({ participants: loggedInUserId });

        // Extract unique user IDs from the conversations
        const participantIds = conversations.flatMap(conversation => conversation.participants);
        const uniqueParticipantIds = [...new Set(participantIds)];

        // Retrieve user objects corresponding to the participant IDs
        const users = await User.find({ _id: { $in: uniqueParticipantIds } }).select("-password");

        res.status(200).json(users);
    } catch (error) {
        console.error("Error in conversationUsers: ", error.message)
        res.status(500).json({ message: error.message });
    }
}
