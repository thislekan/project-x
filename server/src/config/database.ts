import config from "./index";

export default {
  development: {
    username: config.DB_USERNAME,
    host: config.DB_HOST,
    dialect: "postgres",
    database: config.DB_NAME,
    password: config.DB_PASS,
  },
  production: {
    username: config.DB_USERNAME,
    host: config.DB_HOST,
    dialect: "postgres",
    database: config.DB_NAME,
    password: config.DB_PASS,
  },
};
