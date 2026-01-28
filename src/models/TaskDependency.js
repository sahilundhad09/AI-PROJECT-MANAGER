const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const TaskDependency = sequelize.define("TaskDependency", {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  task_id: { type: DataTypes.UUID, allowNull: false },
  depends_on_task_id: { type: DataTypes.UUID, allowNull: false },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, { tableName: "task_dependencies", underscored: true, timestamps: false });

module.exports = TaskDependency;
