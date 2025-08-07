
// This file will handle the logic for user authentication, including registration and login.

/*
import { Request, Response, NextFunction } from 'express';
import { hashPassword, createJWT, comparePassword } from '../utils/auth';
import prisma from '../prisma';
import { userRegistrationSchema, userLoginSchema } from '../schemas/userSchemas';

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password, name } = userRegistrationSchema.parse(req.body);

    const hashedPassword = await hashPassword(password);
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    const token = createJWT({ id: user.id, email: user.email });
    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = userLoginSchema.parse(req.body);

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isValidPassword = await comparePassword(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = createJWT({ id: user.id, email: user.email });
    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};
*/
