import e from "express";
import { createPost, getPostsByAuthor, getPostById, updatePost } from "../models/post-model.js";

export const newPost = async (req, res) => {
    try {
        const authorId = parseInt(req.user.id);
        const postData = req.body;
        const post = await createPost(authorId, postData);
        return res.status(201).json(post);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const fetchPostsByAuthor = async (req, res) => {
    try {
        const authorId = parseInt(req.user.id);
        const posts = await getPostsByAuthor(authorId);
        return res.status(200).json(posts);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const fetchPostById = async (req, res) => {
    try {
        const postId = parseInt(req.params.postId);
        const post = await getPostById(postId);
        return res.status(200).json(post);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const editPost = async (req, res) => {
    try {
        const postId = parseInt(req.params.postId);
        const postData = req.body;
        const updatedPost = await updatePost(postId, postData);
        return res.status(200).json(updatedPost);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}