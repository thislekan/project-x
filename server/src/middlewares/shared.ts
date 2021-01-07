/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as queryString from "query-string";
import env from "../config";
import { RequestObj } from "./types";

const authorize = "https://accounts.spotify.com/authorize";
const scope = "user-read-private user-read-email";
const spotifyID = env.SPOTIFY_ID;
const redirect_uri = env.SPOTIFY_REDIRECT;

export const redirectToSpotify = (
  _req: Partial<RequestObj>,
  res: { redirect: (val: string) => void; body?: never }
) =>
  res.redirect(
    `${authorize}?client_id=${spotifyID}&response_type=code&redirect_uri=${redirect_uri}&scope=${scope}`
  );

export const redirectToClient = (
  req: Partial<RequestObj>,
  res: { redirect: (val: string) => void }
) => {
  console.log(req.body, "==req");
  console.log(req.query, "--quer");
  return res.redirect(
    `${env.FRONTEND_URL || "localhost:/9000"}${queryString.stringify({})}`
  );
};
