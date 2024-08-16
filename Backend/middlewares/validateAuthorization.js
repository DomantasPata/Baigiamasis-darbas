import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export default function validateToken(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "No token provided" });
  }

  const auth = authorization.split(" ")[1];

  if (!auth) {
    return res.status(401).json({ error: "Invalid token" });
  }

  try {
    const secretKey = process.env.AUTH_KEY;
    const decoded = jwt.verify(auth, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ error: "Invalid or expired token" });
  }
}
