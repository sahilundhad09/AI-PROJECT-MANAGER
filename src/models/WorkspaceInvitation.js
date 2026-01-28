const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const WorkspaceInvitation = sequelize.define("WorkspaceInvitation", {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  workspace_id: { type: DataTypes.UUID, allowNull: false },
  invited_by: { type: DataTypes.UUID, allowNull: false },
  email: DataTypes.STRING(150),
  role: DataTypes.STRING(20),
  token: { type: DataTypes.TEXT, unique: true },
  status: { type: DataTypes.STRING(20), defaultValue: "pending" },
  expires_at: DataTypes.DATE,
  accepted_at: DataTypes.DATE,
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, { tableName: "workspace_invitations", underscored: true, timestamps: false });

module.exports = WorkspaceInvitation;
