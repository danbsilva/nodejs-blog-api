import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createUser = async (user) => {
    try {
        const newUser = await prisma.user.create({
            data: {
                email: user.email,
                name: user.name,
                password: user.password,
            },
        });
        return newUser;
    } catch (error) {
        throw new Error(`Error creating user: ${error.message}`);
    }
}

export const findUserByEmail = async (email) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });
        return user;
    } catch (error) {
        throw new Error(`Error finding user: ${error.message}`);
    }
}