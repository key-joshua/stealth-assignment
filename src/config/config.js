import dotenv from 'dotenv';

dotenv.config();

module.exports = {
  development: {
    username: process.env.DATABASE_USERNAME_STG,
    password: process.env.DATABASE_PASSWORD_STG,
    user: process.env.DATABASE_USERNAME_STG,
    database: process.env.DATABASE_STG,
    host: process.env.DATABASE_HOST_STG,
    port: process.env.DATABASE_PORT_STG,
    dialect: 'postgres',
    logging: false,
  },

  production: {
    username: process.env.DATABASE_USERNAME_PRO,
    password: process.env.DATABASE_PASSWORD_PRO,
    user: process.env.DATABASE_USERNAME_PRO,
    database: process.env.DATABASE_PRO,
    host: process.env.DATABASE_HOST_PRO,
    port: process.env.DATABASE_PORT_PRO,
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: { rejectUnauthorized: false },
    },
  },
};
