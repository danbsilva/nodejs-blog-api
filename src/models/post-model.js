import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createPost = async (authorId, postData) => {
    try {
        const newPost = await prisma.post.create({
            data: {
                title: postData.title,
                content: postData.content,
                authorId: authorId,
            },
        });
        return newPost;
    } catch (error) {
        throw new Error(`Error creating post: ${error.message}`);
    }
}

export const getPostsByAuthor = async (authorId) => {
    try {
        const posts = await prisma.post.findMany({
            where: {
                authorId: authorId,
            },
            include: {
                author: {
                    select: {
                        name: true,
                    },
                },
            },
        });
        return posts;
    }
    catch (error) {
        throw new Error(`Error fetching posts: ${error.message}`);
    }
}

export const getPostById = async (postId) => {
    try {
        const post = await prisma.post.findUnique({
            where: {
                id: postId,
            },
            include: {
                comments: {
                    include: {
                        user: {
                            select: {
                                name: true,
                            },
                        },
                    },
                    orderBy: {
                        id: "desc",
                    },
                },
            },
        });
        return post;
    }
    catch (error) {
        throw new Error(`Error fetching post: ${error.message}`);
    }
}
