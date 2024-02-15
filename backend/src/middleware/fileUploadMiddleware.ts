// src/middleware/fileUploadMiddleware.ts
import multer, { Request, Express } from 'multer';
import { NextFunction } from 'express';

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

const fileUploadMiddleware = upload.single('file');

export default fileUploadMiddleware as (
  req: Request,
  res: Response,
  next: NextFunction
) => void;
