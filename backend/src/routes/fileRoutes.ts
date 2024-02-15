// src/routes/fileRoutes.ts
import { Router } from 'express';
import fileController from '../controllers/fileController';
import fileUploadMiddleware from '../middleware/fileUploadMiddleware';

const router = Router();

router.post('/upload', fileUploadMiddleware, fileController.uploadFile);

export default router;
