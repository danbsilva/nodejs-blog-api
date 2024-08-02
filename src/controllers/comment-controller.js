import { createComment, getCommentsByPost, getCommentById, updateComment, deleteComment } from "../models/comment-model.js";

export const newComment = async (req, res) => {
    try {
        const authorId = parseInt(req.user.id);
        const postId = parseInt(req.params.postId);
        const commentData = req.body
        const comment = await createComment(authorId, postId, commentData);
        return res.status(201).json(comment);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const fetchCommentsByPost = async (req, res) => {
    try {
        const postId = parseInt(req.params.postId);
        const comments = await getCommentsByPost(postId);
        return res.status(200).json(comments);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const fetchCommentById = async (req, res) => {
    try {
        const commentId = parseInt(req.params.commentId);
        const comment = await getCommentById(commentId);
        return res.status(200).json(comment);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const editComment = async (req, res) => {
    try {
        const commentId = parseInt(req.params.commentId);
        const commentData = req.body;
        const updatedComment = await updateComment(commentId, commentData);
        return res.status(200).json(updatedComment);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const removeComment = async (req, res) => {
    try {
        const commentId = parseInt(req.params.commentId);
        await deleteComment(commentId);
        return res.status(204).end();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}