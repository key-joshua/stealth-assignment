/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import { readdirSync } from 'fs';
import { basename as _basename, join } from 'path';
import Sequelize from 'sequelize';
import dbConfig from '../../config';

const basename = _basename(__filename);
const env = process.env.NODE_ENV || 'development';
const configs = dbConfig[env];
const db = {};

let sequelize;
if (configs.url) {
  sequelize = new Sequelize(configs.url, configs);
} else {
  sequelize = new Sequelize(configs.database, configs.username, configs.password, configs);
}

readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = require(join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
