import dotEnv from "dotenv";

dotEnv.config();
const { env } = process;

export default {
  // JWT_SECRET: env.JWT_SECRET,
  NODE_ENV: env.NODE_ENV,
  DATABASE_URL: env.DATABASE_URL,
  DB_NAME: env.DB_NAME,
  DB_PASS: env.DB_PASS,
  DB_USERNAME: env.DB_USERNAME,
  DB_HOST: env.DB_HOST,
  DB_PORT: env.DB_PORT,
  PORT: env.PORT,
  FRONTEND_URL: env.FRONTEND_URL,
  SPOTIFY_ID: env.SPOTIFY_ID,
  SPOTIFY_SECRET: env.SPOTIFY_SECRET,
  SPOTIFY_REDIRECT: env.SPOTIFY_REDIRECT,
  SPOTIFY_TOKEN: env.SPOTIFY_TOKEN,
  SPOTIFY_WEB_SDK_TOKEN: env.SPOTIFY_WEB_SDK_TOKEN,
  COOKIE_SECRET: env.COOKIE_SECRET,
};
