module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE },
    userId: { type: DataTypes.INTEGER },
    name: { type: DataTypes.STRING },
    rating: { type: DataTypes.NUMERIC },
    cast: { type: DataTypes.ARRAY(DataTypes.STRING(1000)) },
    releaseDate: { type: DataTypes.DATE },
  }, {});

  Movie.associate = (models) => {
    Movie.hasOne(models.Session, {
      foreignKey: 'userId',
      as: 'Session',
      onDelete: 'CASCADE',
    });

    Movie.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'User',
      onDelete: 'CASCADE',
    });
  };

  return Movie;
};
