import "core-js/stable";
import "regenerator-runtime/runtime";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import config from "config";
import routes from "routes";

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(routes);

app.get("/", (_req, res) =>
  res.status(200).json({
    message: "Welcome to the Project-X API endpoints.",
  })
);

app.listen(config.PORT, () =>
  console.log(`App is now live on port ${config.PORT}`)
);
