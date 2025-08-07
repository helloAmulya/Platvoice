
// This middleware will be used to protect routes that require a logged-in user.
// It will verify the JWT token from the request headers.

/*
import { Request, Response, NextFunction } from 'express';
import { verifyJWT } from '../utils/auth';

// Extend the Express Request type to include the user property
interface AuthenticatedRequest extends Request {
  user?: any;
}

export const authMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const bearerHeader = req.headers.authorization;

  if (!bearerHeader) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  const bearer = bearerHeader.split(' ');
  const token = bearer[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: Malformed token' });
  }

  try {
    const user = verifyJWT(token);
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};
*/
