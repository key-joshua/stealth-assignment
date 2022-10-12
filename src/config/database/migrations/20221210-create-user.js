const up = (queryInterface, Sequelize) => queryInterface.createTable('Users', {
  createdAt: { allowNull: false, type: Sequelize.DATE },
  updatedAt: { allowNull: false, type: Sequelize.DATE },
  id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
  name: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
  password: { type: Sequelize.STRING },
  isVerified: { type: Sequelize.BOOLEAN },
});

const down = (queryInterface) => queryInterface.dropTable('Users');

export { up, down };
