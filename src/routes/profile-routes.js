import express from "express";
import auth from "../middlewares/auth-middleware.js";
import { newProfile, fetchProfiles, fetchProfileById, editProfile  } from '../controllers/profile-controller.js';


const profileRoutes = express.Router();

profileRoutes.post("/", auth, newProfile);

profileRoutes.get("/", auth, fetchProfiles);

profileRoutes.get("/:profileId", auth, fetchProfileById);

profileRoutes.put("/:profileId", auth, editProfile);

export default profileRoutes;