const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Workspace = sequelize.define("Workspace", {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  name: { type: DataTypes.STRING(160), allowNull: false },
  slug: { type: DataTypes.STRING(120), allowNull: false, unique: true },
  owner_id: { type: DataTypes.UUID, allowNull: false },
  plan: { type: DataTypes.STRING(50), defaultValue: "free" },
  logo_url: DataTypes.TEXT,
  settings: { type: DataTypes.JSONB, defaultValue: {} },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updated_at: DataTypes.DATE,
}, { tableName: "workspaces", underscored: true, timestamps: false });

module.exports = Workspace;
