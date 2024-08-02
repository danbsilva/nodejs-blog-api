import bcrypt from "bcrypt";
import { createUser, getUsers, findUserByEmail } from "../models/user-model.js";

export const newUser = async (req, res) => {
    try {
        const userExists = await findUserByEmail(req.body.email);
        if (userExists) {
            return res.status(409).json({ error: "User already exists" });
        }
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword
        const user = await createUser(req.body);

        return res.status(201).json(user);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const fetchUsers = async (req, res) => {
    try {
        const users = await fetchUsers();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};