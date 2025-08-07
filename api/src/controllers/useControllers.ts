import prisma from "../prisma/index.js"
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";


import type { CreateUserInput } from "../types/index.js"

export const createUser = async (data: CreateUserInput) => {


    // after adding zod to the types/index.ts, add the parse here to get the valid data

    const existingUser = await prisma.user.findUnique({
        where: { email: data.email },
    });

    if (existingUser) {
        throw new Error("Email already registered");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await prisma.user.create({
        data: {
            email: data.email,
            password: hashedPassword,
            name: data.name,
        },

    });

    //  generate token for auto-login after signup 
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
        expiresIn: "7d",
    });

    return { user, token };
};