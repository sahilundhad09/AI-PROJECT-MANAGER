const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const TaskTag = sequelize.define("TaskTag", {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  project_id: { type: DataTypes.UUID, allowNull: false },
  name: { type: DataTypes.STRING(50), allowNull: false },
}, { tableName: "task_tags", underscored: true, timestamps: false });


module.exports = TaskTag;
