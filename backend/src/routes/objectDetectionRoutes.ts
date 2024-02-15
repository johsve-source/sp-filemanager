// src/routes/objectDetectionRoutes.ts
import express from 'express';
import objectDetectionController from '../controllers/objectDetectionController';

const router = express.Router();

router.post('/detect-objects', objectDetectionController.detectObjects);

export default router;
