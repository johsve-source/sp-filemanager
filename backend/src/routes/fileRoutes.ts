// src/routes/fileRoutes.ts
import {
  Router,
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from 'express';
import fileUploadMiddleware from '../middleware/fileUploadMiddleware';

const router = Router();

router.post(
  '/upload',
  fileUploadMiddleware as RequestHandler,
  (req: Request, res: Response, next: NextFunction) => {
    // Your route logic here
  }
);

export default router;
