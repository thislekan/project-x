import { Sequelize } from "sequelize";
import config from "../config";

const sequelize = new Sequelize(`${config.DATABASE_URL}`);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const connect = async () => {
  try {
    await sequelize.authenticate();
    // eslint-disable-next-line no-undef
    console.log("Connection has been established successfully.");
    return "Returning success";
  } catch (error) {
    // eslint-disable-next-line no-undef
    console.error("Unable to connect to the database:", error);
  }
  return 1;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const cancelConnect = () => {
  try {
    sequelize.close();
    console.log("connection is closed");
  } catch (error) {
    console.log(`sequelize connection not closed because ${error}`);
  }
  return 2;
};
