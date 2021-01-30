import "core-js/stable";
import "regenerator-runtime/runtime";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";

import routes from "routes";

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(cookieParser());
app.use(routes);

app.get("/", (_req, res) =>
  res.status(200).json({
    message: "Welcome to the Project-X API endpoints.",
  })
);

export default server;
