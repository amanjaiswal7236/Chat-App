import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";


export const sendMessage = async (req, res, next) => {
    try {
        const { id: receiverId } = req.params;
        const { message } = req.body;

        const senderId = req.user.id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        await Promise.all([newMessage.save(), conversation.save()]);

        // Emit to receiver
        const receiverSocketId = getReceiverSocketId(receiverId);
        if (receiverSocketId) {
            io.to(receiverSocketId).emit('newMessage', newMessage);
        }

        // Emit to sender
        const senderSocketId = getReceiverSocketId(senderId);
        if (senderSocketId) {
            io.to(senderSocketId).emit('newMessage', newMessage);
        }

        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in sendMessage", error);
        next(error);
    }
};

export const getMessage = async (req, res, next) => {
    try {
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        }).populate('messages');

        if (!conversation) {
            return res.status(200).json([]);
        }

        res.status(200).json(conversation.messages);
    } catch (error) {
        next(error);
    }
};
