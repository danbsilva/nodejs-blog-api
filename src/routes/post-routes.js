import express from "express";
import auth from "../middlewares/auth-middleware.js";
import { newPost, fetchPostsByAuthor, fetchPostById, editPost  } from "../controllers/post-controller.js";

const router = express.Router();

router.post("/", auth, newPost);

router.get("/", auth, fetchPostsByAuthor);

router.get("/:postId", auth, fetchPostById);

router.put("/:postId", auth, editPost);


export default router;
