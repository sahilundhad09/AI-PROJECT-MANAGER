const RefreshToken = sequelize.define("RefreshToken", {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  user_id: { type: DataTypes.UUID, allowNull: false },
  token: { type: DataTypes.TEXT, allowNull: false, unique: true },
  expires_at: { type: DataTypes.DATE, allowNull: false },
  revoked_at: DataTypes.DATE,
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, { tableName: "refresh_tokens", underscored: true, timestamps: false });
