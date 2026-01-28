const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Comment = sequelize.define("Comment", {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  task_id: { type: DataTypes.UUID, allowNull: false },
  user_id: { type: DataTypes.UUID, allowNull: false },
  message: { type: DataTypes.TEXT, allowNull: false },
  parent_comment_id: DataTypes.UUID,
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, { tableName: "comments", underscored: true, timestamps: false });

module.exports = Comment;
