// src/middleware/fileUploadMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import multer from 'multer';

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (
    req: Request,
    file: Express.Multer.File,
    cb: (error: Error | null, filename: string) => void
  ) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const fileUploadMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Your middleware logic here
  upload.single('file')(req, res, next);
};

export default fileUploadMiddleware;
