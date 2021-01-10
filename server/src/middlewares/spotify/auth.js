/* eslint-disable camelcase */
import fetch from "node-fetch";
import * as queryString from "query-string";
import generateRandomString from "utils";

const authorize = "https://accounts.spotify.com/authorize";
const scope = "user-read-private user-read-email user-read-playback-state";
const stateKey = "spotify_auth_state";

const getAuthOptions = (code, headers) => {
  const url = "https://accounts.spotify.com/api/token";
  const options = { method: "POST", headers, code, url };
  return options;
};

// const accessSpotifyWeb = async (token) => {
//   try {
//     const apiCall = await fetch("https://api.spotify.com/v1/me", {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     const feedback = await apiCall.json();
//     return console.log(feedback);
//   } catch (error) {
//     return console.log(error, "--from");
//   }
// };

const postToToken = async (options, res, next) => {
  const { default: env } = await import("config");
  const { url, code, headers, method } = options;

  const params = new URLSearchParams();
  params.append("code", code);
  params.append("grant_type", "authorization_code");
  params.append("redirect_uri", env.SPOTIFY_REDIRECT);
  params.append("client_id", env.SPOTIFY_ID);
  params.append("client_secret", env.SPOTIFY_SECRET);

  try {
    const apiCall = await fetch(url, { method, body: params, headers });
    const feedback = await apiCall.json();
    console.log({ feedback });
    const { access_token, refresh_token } = feedback;

    if (access_token && refresh_token) {
      const data = queryString.stringify({
        access_token,
        refresh_token,
      });
      res.locals.data = data;

      return next();
    }
    res.locals.error = queryString.stringify({
      error: "invalid_token",
    });
    return next();
  } catch (error) {
    return console.log(`postToKen error: ${error}`);
  }
};

export const redirectToSpotify = async (_req, res) => {
  const { default: env } = await import("config");
  const state = generateRandomString(18);
  res.cookie(stateKey, state);

  return res.redirect(
    `${authorize}?client_id=${env.SPOTIFY_ID}&response_type=code&redirect_uri=${env.SPOTIFY_REDIRECT}&state=${state}&scope=${scope}`
  );
};

export const redirectToClient = (req, res, next) => {
  const { code, state } = req?.query;
  const { cookies } = req;
  const storedState = cookies && cookies[stateKey];

  const headers = { "Content-Type": "application/x-www-form-urlencoded" };
  const options = getAuthOptions(code, headers);

  if (!state || state !== storedState) {
    res.locals.error = queryString.stringify({
      error: "cookie_mismatch",
    });
    return next();
  }

  res.clearCookie(stateKey);
  return postToToken(options, res, next);
};

export const getNewToken = async (req, res, next) => {
  const { default: env } = await import("config");
  const { token } = req.query;

  const params = new URLSearchParams();
  params.append("grant_type", "refresh_token");
  params.append("client_id", env.SPOTIFY_ID);
  params.append("client_secret", env.SPOTIFY_SECRET);
  params.append("refresh_token", token);

  const { url, method, headers } = getAuthOptions();

  try {
    const apiCall = await fetch(url, { method, body: params, headers });
    const { access_token } = await apiCall.json();
    res.locals.access_token = access_token;
    return next();
  } catch (error) {
    res.locals.errror = error;
    return next();
  }
};
