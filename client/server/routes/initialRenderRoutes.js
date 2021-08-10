import express from 'express';
import initialRenderController from '../controller/initialRenderController.js';

const router = express.Router();

router.get('/', initialRenderController);

export default router;
