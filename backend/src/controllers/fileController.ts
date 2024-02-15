// src/controllers/fileController.ts
import { Request, Response, NextFunction } from 'express';
import fileService from '../services/fileService'; // Adjust the path based on your project structure

const fileController = {
  uploadFile: (req: Request, res: Response, next: NextFunction) => {
    // Check if req.file is defined
    if (req.file) {
      const result = fileService.uploadFile(req.file);
      // Your logic here
      res.json({ result });
    } else {
      // Handle the case where req.file is undefined
      res.status(400).json({ error: 'No file uploaded' });
    }
  },
};

export default fileController;
