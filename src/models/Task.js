const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Task = sequelize.define("Task", {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  project_id: { type: DataTypes.UUID, allowNull: false },
  status_id: { type: DataTypes.UUID, allowNull: false },
  title: DataTypes.STRING(220),
  description: DataTypes.TEXT,
  priority: { type: DataTypes.STRING(10), defaultValue: "medium" },
  task_type: { type: DataTypes.STRING(20), defaultValue: "task" },
  due_date: DataTypes.DATE,
  start_date: DataTypes.DATE,
  estimated_hours: DataTypes.DECIMAL(6,2),
  actual_hours: DataTypes.DECIMAL(6,2),
  order_no: { type: DataTypes.INTEGER, defaultValue: 0 },
  parent_task_id: DataTypes.UUID,
  created_by: DataTypes.UUID,
  is_archived: { type: DataTypes.BOOLEAN, defaultValue: false },
  completed_at: DataTypes.DATE,
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updated_at: DataTypes.DATE,
}, { tableName: "tasks", underscored: true, timestamps: false });


module.exports = Task;
