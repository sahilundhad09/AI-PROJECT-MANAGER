const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const TaskStatus = sequelize.define("TaskStatus", {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  project_id: { type: DataTypes.UUID, allowNull: false },
  name: { type: DataTypes.STRING(50), allowNull: false },
  order_no: { type: DataTypes.INTEGER, allowNull: false },
  is_default: { type: DataTypes.BOOLEAN, defaultValue: false },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, { tableName: "task_statuses", underscored: true, timestamps: false });

module.exports = TaskStatus;
