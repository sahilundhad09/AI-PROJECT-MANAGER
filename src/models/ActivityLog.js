const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const ActivityLog = sequelize.define("ActivityLog", {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  workspace_id: { type: DataTypes.UUID, allowNull: false },
  project_id: DataTypes.UUID,
  task_id: DataTypes.UUID,
  actor_id: { type: DataTypes.UUID, allowNull: false },
  action: { type: DataTypes.STRING(100), allowNull: false },
  meta: DataTypes.JSONB,
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, { tableName: "activity_logs", underscored: true, timestamps: false });

module.exports = ActivityLog;
