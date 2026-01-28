const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const AIToolLog = sequelize.define("AIToolLog", {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  session_id: { type: DataTypes.UUID, allowNull: false },
  tool_name: DataTypes.STRING(100),
  input: DataTypes.JSONB,
  output: DataTypes.JSONB,
  success: DataTypes.BOOLEAN,
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, { tableName: "ai_tool_logs", underscored: true, timestamps: false });


module.exports = AIToolLog;
