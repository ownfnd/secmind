import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { z } from 'zod';

const SALT_ROUNDS = 12; // High work factor for security
const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_do_not_use_in_prod';

// Schema for User Registration
export const RegisterSchema = z.object({
    email: z.string().email(),
    password: z.string().min(12, "Password must be at least 12 characters").regex(/[A-Z]/, "Must contain uppercase").regex(/[0-9]/, "Must contain number").regex(/[^a-zA-Z0-9]/, "Must contain special char"),
    name: z.string().min(2).optional(),
});

// Schema for Login
export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});

export const hashPassword = async (password: string): Promise<string> => {
    return bcrypt.hash(password, SALT_ROUNDS);
};

export const verifyPassword = async (password: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(password, hash);
};

export const signToken = (payload: any, expiresIn: string | number = '1h'): string => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn } as jwt.SignOptions);
};

export const verifyToken = (token: string): any => {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
};
