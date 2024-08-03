import express from 'express';
import authRoutes from './routes/auth-routes.js';
import profileRoutes from './routes/profile-routes.js';
import userRoutes from './routes/user-routes.js';
import postRoutes from './routes/post-routes.js';
import commentRoutes from './routes/comment-routes.js';

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/profiles", profileRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes, commentRoutes);



export default app;