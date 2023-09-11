import express from "express";
import AuthRoute from "./routes/auth.routes";
import cors from "cors";

const app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use(AuthRoute);

export default app;
