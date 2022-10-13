const up = (queryInterface, Sequelize) => queryInterface.createTable('Movies', {
  createdAt: { allowNull: false, type: Sequelize.DATE },
  updatedAt: { allowNull: false, type: Sequelize.DATE },
  id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
  userId: { type: Sequelize.INTEGER },
  name: { type: Sequelize.STRING },
  rating: { type: Sequelize.NUMERIC },
  cast: { type: Sequelize.ARRAY(Sequelize.STRING(1000)) },
  releaseDate: { type: Sequelize.DATE },
});

const down = (queryInterface) => queryInterface.dropTable('Movies');
export { up, down };
