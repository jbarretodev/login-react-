import { Request, Response } from "Express";
import jwt from "jsonwebtoken";

export const loginHandler = (req: Request, res: Response) => {
  const token = jwt.sign(
    {
      test: "test",
    },
    "secret",
    {
      expiresIn: 60 * 60 * 24,
    }
  );

  return res.status(200).json({ token });
};

export const profileHandler = (req: Request, res: Response) => {
  return res.status(200).json({ profile: req.user, message: "Success" });
};
