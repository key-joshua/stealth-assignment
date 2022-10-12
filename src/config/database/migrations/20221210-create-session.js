const up = (queryInterface, Sequelize) => queryInterface.createTable('Sessions', {
  createdAt: { allowNull: false, type: Sequelize.DATE },
  updatedAt: { allowNull: false, type: Sequelize.DATE },
  id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
  userId: { type: Sequelize.INTEGER },
  session: { type: Sequelize.STRING(5000) },
});

const down = (queryInterface) => queryInterface.dropTable('Sessions');

export { up, down };
