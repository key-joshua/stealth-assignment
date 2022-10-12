module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define('Session', {
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE },
    userId: { type: DataTypes.INTEGER },
    session: { type: DataTypes.STRING(1000) },
  }, {});

  Session.associate = (models) => {
    Session.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'User',
      onDelete: 'CASCADE',
    });
  };

  return Session;
};
