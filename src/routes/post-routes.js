import express from "express";
import auth from "../middlewares/auth-middleware.js";
import { newPost, fetchPostsByAuthor, fetchPostById  } from "../controllers/post-controller.js";

const router = express.Router();

router.post("/", auth, newPost);

router.get("/", auth, fetchPostsByAuthor);

router.get("/:postId", auth, fetchPostById);


export default router;
