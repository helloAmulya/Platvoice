
// This file will contain utility functions for authentication, such as hashing passwords and generating JWT tokens.

/*
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const hashPassword = (password: string) => {
  return bcrypt.hash(password, 10);
};

export const comparePassword = (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
};

export const createJWT = (payload: object) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET!,
    {
      expiresIn: '1d',
    }
  );
  return token;
};

export const verifyJWT = (token: string) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET!)
  return decoded;
}
*/
