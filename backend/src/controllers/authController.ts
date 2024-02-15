// src/controllers/authController.ts
import { Request, Response, NextFunction } from 'express';
import authService from '../services/authService';

class AuthController {
  login(req: Request, res: Response, next: NextFunction): void {
    const { username, password } = req.body;

    // Use the authService to authenticate the user
    const isAuthenticated = authService.authenticateUser(username, password);

    if (isAuthenticated) {
      // Respond with success
      res.status(200).json({ message: 'Authentication successful' });
    } else {
      // Respond with authentication failure
      res.status(401).json({ message: 'Authentication failed' });
    }
  }
}

export default new AuthController();
