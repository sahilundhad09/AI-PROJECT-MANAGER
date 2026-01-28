const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const TaskAssignee = sequelize.define("TaskAssignee", {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  task_id: { type: DataTypes.UUID, allowNull: false },
  user_id: { type: DataTypes.UUID, allowNull: false },
  assigned_by: { type: DataTypes.UUID, allowNull: false },
  assigned_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, { tableName: "task_assignees", underscored: true, timestamps: false });


module.exports = TaskAssignee;
