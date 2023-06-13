import Router from 'express';
import MessageController from "./src/controllers/MessageController.js";
import { tryCatch } from './src/utils/tryCatch.js';

const router = new Router();

router.post('/message/create', tryCatch(MessageController.sendMessageToRoom));

export default router;
