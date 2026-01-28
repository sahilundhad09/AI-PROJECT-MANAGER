const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("User", {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  name: { type: DataTypes.STRING(120), allowNull: false },
  email: { type: DataTypes.STRING(150), allowNull: false, unique: true },
  password_hash: { type: DataTypes.TEXT, allowNull: false },
  avatar_url: DataTypes.TEXT,
  phone: DataTypes.STRING(20),
  is_verified: { type: DataTypes.BOOLEAN, defaultValue: false },
  last_login_at: DataTypes.DATE,
  status: { type: DataTypes.STRING(20), defaultValue: "active" },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updated_at: DataTypes.DATE,
}, { tableName: "users", underscored: true, timestamps: false });

module.exports = User;
