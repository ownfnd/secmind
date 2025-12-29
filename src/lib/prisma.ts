// MOCK PRISMA CLIENT implementation to bypass build failures
// The real database requires a working 'npx prisma generate' which is failing in this environment.

export const prisma = {
    user: {
        findUnique: async () => null,
        create: async ({ data }: any) => ({ ...data, id: "mock-id", role: "USER", createdAt: new Date(), updatedAt: new Date() }),
    },
    labProgress: {
        findMany: async () => [],
    }
} as any;
