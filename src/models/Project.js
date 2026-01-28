const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Project = sequelize.define("Project", {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  workspace_id: { type: DataTypes.UUID, allowNull: false },
  name: DataTypes.STRING(180),
  description: DataTypes.TEXT,
  status: { type: DataTypes.STRING(20), defaultValue: "active" },
  priority: { type: DataTypes.STRING(10), defaultValue: "medium" },
  start_date: DataTypes.DATEONLY,
  due_date: DataTypes.DATEONLY,
  created_by: { type: DataTypes.UUID, allowNull: false },
  archived_at: DataTypes.DATE,
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updated_at: DataTypes.DATE,
}, { tableName: "projects", underscored: true, timestamps: false });

module.exports = Project;
