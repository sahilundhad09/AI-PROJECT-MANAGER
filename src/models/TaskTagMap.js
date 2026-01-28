const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const TaskTagMap = sequelize.define("TaskTagMap", {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  task_id: { type: DataTypes.UUID, allowNull: false },
  tag_id: { type: DataTypes.UUID, allowNull: false },
}, { tableName: "task_tag_map", underscored: true, timestamps: false });

module.exports = TaskTagMap;
