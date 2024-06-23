import express from "express";
import { config } from "dotenv";

config({
  path: "src/config/config.env",
});

const app = express();

// importing routes
import courseRoutes from "./routes/courseRoutes.js";

app.use("/api/v1", courseRoutes);

export default app;
