import prisma from "../prisma/index.js"
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";


import type { CreateBusinessInput } from "../types/index.js";
import { email } from "zod";



export const createBusiness = async (userId: string, data: CreateBusinessInput) => {
    // after adding zod to the types/index.ts, add the parse here to get the valid data


    const business = await prisma.business.create({
        data: {
            name: data.name,
            address: data.address,
            phone: data.phone,
            email: data.email,
            logo: data.logo,
            currency: data.currency || 'INR',
            adminId: userId,
        },
    });
    return business;
};