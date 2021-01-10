import { Model, DataTypes, Sequelize } from "sequelize";
import config from "config";

const sequelize = new Sequelize(`${config.DATABASE_URL}`);

class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Anonymous User",
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    modelName: "User",
    sequelize,
  }
);
