const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const ProjectLabel = sequelize.define("ProjectLabel", {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  project_id: { type: DataTypes.UUID, allowNull: false },
  name: { type: DataTypes.STRING(60), allowNull: false },
  color: DataTypes.STRING(30),
}, { tableName: "project_labels", underscored: true, timestamps: false });

module.exports = ProjectLabel;
