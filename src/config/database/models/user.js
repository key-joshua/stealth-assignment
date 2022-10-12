module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE },
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    isVerified: { type: DataTypes.BOOLEAN },
  }, {});

  User.associate = (models) => {
    User.hasOne(models.Session, {
      foreignKey: 'userId',
      as: 'Session',
      onDelete: 'CASCADE',
    });
  };

  return User;
};
