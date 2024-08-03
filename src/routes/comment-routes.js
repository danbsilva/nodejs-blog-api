import express from "express";
import auth from "../middlewares/auth-middleware.js";
import { newComment, fetchCommentsByPost, fetchCommentById, editComment, removeComment } from "../controllers/comment-controller.js";

const router = express.Router();

router.post("/:postId/comments", auth, newComment);

router.get("/:postId/comments", auth, fetchCommentsByPost);

router.get("/:postId/comments/:commentId", auth, fetchCommentById);

router.put("/:postId/comments/:commentId", auth, editComment);

router.delete("/:postId/comments/:commentId", auth, removeComment);



export default router;
