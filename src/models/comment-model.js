import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createComment = async (authorId, postId, commentData) => {
    try {
        const newComment = await prisma.comment.create({
            data: {
                comment: commentData.comment,
                userId: authorId,
                postId: postId,
            },
        });
        return newComment;
    } catch (error) {
        throw new Error(`Error creating comment: ${error.message}`);
    }
}

export const getCommentsByPost = async (postId) => {
    try {
        const comments = await prisma.comment.findMany({
            where: {
                postId: postId,
            },
            include: {
                user: {
                    select: {
                        name: true,
                    },
                },
            },
        });
        return comments;
    } catch (error) {
        throw new Error(`Error fetching comments: ${error.message}`);
    }
}

export const getCommentById = async (commentId) => {
    try {
        const comment = await prisma.comment.findUnique({
            where: {
                id: commentId,
            },
            include: {
                user: {
                    select: {
                        name: true,
                    },
                },
            },
        });
        return comment;
    } catch (error) {
        throw new Error(`Error fetching comment: ${error.message}`);
    }
}

export const updateComment = async (commentId, commentData) => {
    try {
        const updatedComment = await prisma.comment.update({
            where: {
                id: commentId,
            },
            data: {
                comment: commentData.comment,
            },
        });
        return updatedComment;
    } catch (error) {
        throw new Error(`Error updating comment: ${error.message}`);
    }
}

export const deleteComment = async (commentId) => {
    try {
        const deletedComment = await prisma.comment.delete({
            where: {
                id: commentId,
            },
        });
        return deletedComment;
    } catch (error) {
        throw new Error(`Error deleting comment: ${error.message}`);
    }
}