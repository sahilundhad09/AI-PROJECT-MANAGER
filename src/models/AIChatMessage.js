const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const AIChatMessage = sequelize.define("AIChatMessage", {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  session_id: { type: DataTypes.UUID, allowNull: false },
  role: DataTypes.STRING(20),
  content: DataTypes.TEXT,
  tool_name: DataTypes.STRING(80),
  tool_payload: DataTypes.JSONB,
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, { tableName: "ai_chat_messages", underscored: true, timestamps: false });


module.exports = AIChatMessage;
