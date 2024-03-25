import express from 'express';
import protectRoute from '../middlewares/protectRoute.js';
import { conversationUsers, getUsers, createChat } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', protectRoute , getUsers);
router.get('/conversationuser', protectRoute , conversationUsers);
router.post('/createchat', protectRoute , createChat);

export default router;