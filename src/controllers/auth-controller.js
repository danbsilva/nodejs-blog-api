import { findUserByEmail } from "../models/user-model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.SECRET;

export const loginUser = async (req, res) => {
    try {
        const user = await findUserByEmail(req.body.email);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "24h" });
        res.status(200).json({ token: token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};