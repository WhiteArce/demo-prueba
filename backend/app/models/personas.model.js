module.exports = (sequelize, Sequelize) => {
  let Persona = sequelize.define("personas", {
    nombre: Sequelize.STRING,
    apellidoP: Sequelize.STRING,
    apellidoM: Sequelize.STRING,
    direccion: Sequelize.STRING,
    telefono: Sequelize.STRING,
  });

  return Persona;
};
