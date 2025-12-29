import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyPassword, LoginSchema, signToken } from '@/lib/auth';
import { z } from 'zod';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, password } = LoginSchema.parse(body);

        // Find user
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return NextResponse.json(
                { error: 'Invalid credentials' },
                { status: 401 }
            );
        }

        // Verify password
        const isValid = await verifyPassword(password, user.password);

        if (!isValid) {
            return NextResponse.json(
                { error: 'Invalid credentials' },
                { status: 401 }
            );
        }

        // Generate JWT
        const token = signToken({ userId: user.id, role: user.role });

        return NextResponse.json(
            {
                user: { id: user.id, email: user.email, name: user.name, role: user.role },
                token
            },
            { status: 200 }
        );

    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ error: error.issues }, { status: 400 });
        }
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
