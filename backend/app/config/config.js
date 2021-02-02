const databaseConfig = {
  HOST: "localhost",
  USER: "root",
  DB: "personasdb",
  DIALECT: "mysql",
  PORT: 3306,
  PASSWORD: '',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports = { databaseConfig: databaseConfig };
