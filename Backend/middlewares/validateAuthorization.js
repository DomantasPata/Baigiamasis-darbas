import jwt from "jsonwebtoken";

export function authenticate(req, res, next) {
  const authHeader = req.headers["authorization"];
  const auth = authHeader && authHeader.split(" ")[1];

  if (!auth) {
    return res.status(401);
  }

  jwt.verify(auth, process.env.AUTH_KEY, (err, user) => {
    if (err) {
      return res.sendStatus(403); // Forbidden
    }

    req.user = user;
    next();
  });
}
