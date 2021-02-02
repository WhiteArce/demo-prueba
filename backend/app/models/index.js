const { databaseConfig } = require("../config/config");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(databaseConfig.DB,databaseConfig.USER, {
  host: databaseConfig.HOST,
  dialect: databaseConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: databaseConfig.pool.max,
    min: databaseConfig.pool.min,
    acquire: databaseConfig.pool.acquire,
    idle: databaseConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.personas = require("./personas.model.js")(sequelize, Sequelize);

module.exports = db;
