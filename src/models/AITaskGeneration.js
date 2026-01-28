const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const AITaskGeneration = sequelize.define("AITaskGeneration", {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  project_id: { type: DataTypes.UUID, allowNull: false },
  prompt: DataTypes.TEXT,
  output: DataTypes.JSONB,
  created_by: { type: DataTypes.UUID, allowNull: false },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, { tableName: "ai_task_generations", underscored: true, timestamps: false });


module.exports = AITaskGeneration;
