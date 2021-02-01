const { databaseConfig } = require("../config/config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  databaseConfig.DB,
  databaseConfig.USER,
  databaseConfig.PASSWORD,
  {
    host: databaseConfig.HOST,
    dialect: databaseConfig.dialect,
    operatorsAliases: false,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.personas = require("./personas.model.js")(sequelize, Sequelize);

module.exports = db;
