import { Request, Response, NextFunction } from "Express";
import jwt from "jsonwebtoken";
export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No authorization header" });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No authorization header" });
  }

  jwt.verify(token, "secret", (err, user) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    req.user = user;
    console.log(user);
    next();
  });
};
