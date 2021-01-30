import express from "express";
import {
  redirectToSpotify,
  redirectToClient,
  getNewToken,
} from "middlewares/spotify/auth";
import { permitUser, refreshUser } from "controllers/spotify";

const app = express.Router();

app.route("/login").get(redirectToSpotify);
app.route("/callback").get(redirectToClient, permitUser);
app.route("/refresh_token").get(getNewToken, refreshUser);

export default app;
