const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const ProjectMember = sequelize.define("ProjectMember", {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  project_id: { type: DataTypes.UUID, allowNull: false },
  workspace_member_id: { type: DataTypes.UUID, allowNull: false },
  project_role: { type: DataTypes.STRING(20), defaultValue: "member" },
  added_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, { tableName: "project_members", underscored: true, timestamps: false });

module.exports = ProjectMember;
