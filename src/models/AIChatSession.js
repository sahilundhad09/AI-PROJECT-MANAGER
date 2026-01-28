const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const AIChatSession = sequelize.define("AIChatSession", {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  workspace_id: { type: DataTypes.UUID, allowNull: false },
  project_id: DataTypes.UUID,
  created_by: { type: DataTypes.UUID, allowNull: false },
  title: DataTypes.STRING(150),
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, { tableName: "ai_chat_sessions", underscored: true, timestamps: false });

module.exports = AIChatSession;
