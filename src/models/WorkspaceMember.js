const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const WorkspaceMember = sequelize.define("WorkspaceMember", {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  workspace_id: { type: DataTypes.UUID, allowNull: false },
  user_id: { type: DataTypes.UUID, allowNull: false },
  role: { type: DataTypes.STRING(20), allowNull: false },
  status: { type: DataTypes.STRING(20), defaultValue: "active" },
  joined_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, { tableName: "workspace_members", underscored: true, timestamps: false });

module.exports = WorkspaceMember;
