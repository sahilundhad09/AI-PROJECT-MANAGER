const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Attachment = sequelize.define("Attachment", {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  task_id: { type: DataTypes.UUID, allowNull: false },
  uploaded_by: { type: DataTypes.UUID, allowNull: false },
  file_url: { type: DataTypes.TEXT, allowNull: false },
  file_name: DataTypes.STRING(255),
  file_size: DataTypes.INTEGER,
  mime_type: DataTypes.STRING(100),
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, { tableName: "attachments", underscored: true, timestamps: false });

module.exports = Attachment;
