const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const AIProjectSummary = sequelize.define("AIProjectSummary", {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  project_id: { type: DataTypes.UUID, allowNull: false },
  summary_type: DataTypes.STRING(50),
  summary: DataTypes.TEXT,
  created_by: { type: DataTypes.UUID, allowNull: false },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, { tableName: "ai_project_summaries", underscored: true, timestamps: false });


module.exports = AIProjectSummary;
