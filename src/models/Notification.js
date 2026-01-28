const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Notification = sequelize.define("Notification", {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  user_id: { type: DataTypes.UUID, allowNull: false },
  type: DataTypes.STRING(50),
  title: DataTypes.STRING(150),
  message: DataTypes.TEXT,
  meta: DataTypes.JSONB,
  is_read: { type: DataTypes.BOOLEAN, defaultValue: false },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, { tableName: "notifications", underscored: true, timestamps: false });


module.exports = Notification;
