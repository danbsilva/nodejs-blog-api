import jwt from "jsonwebtoken";


const auth = (req, res, next) => {
    const JWT_SECRET = process.env.SECRET;
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: "Access denied" });
    }
    try {
        const verified = jwt.verify(token.replace("Bearer ", ""), JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ error: "Invalid token" });
    }
}

export default auth;