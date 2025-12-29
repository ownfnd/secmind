import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { hashPassword, RegisterSchema, signToken } from '@/lib/auth';
import { z } from 'zod';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, password, name } = RegisterSchema.parse(body);

        // Check if user exists
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return NextResponse.json(
                { error: 'User already exists' },
                { status: 409 }
            );
        }

        // Hash password
        const hashedPassword = await hashPassword(password);

        // Create user
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name,
            },
        });

        // Generate JWT
        const token = signToken({ userId: user.id, role: user.role });

        // Return success (excluding password)
        return NextResponse.json(
            {
                user: { id: user.id, email: user.email, name: user.name, role: user.role },
                token
            },
            { status: 201 }
        );

    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ error: error.issues }, { status: 400 });
        }
        console.error('Registration failed:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
