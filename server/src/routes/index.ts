import express from "express";
import { redirectToSpotify, redirectToClient } from "../middlewares/shared";

const app = express.Router();

app.route("/login").get(redirectToSpotify);
app.route("/callback").get(redirectToClient);

export default app;
