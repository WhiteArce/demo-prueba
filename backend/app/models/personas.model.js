const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Persona = sequelize.define("persona", {
        nombre: {
            type: Sequelize.STRING
        },
        apellidoP: {
            type: Sequelize.STRING
        },
        ApellidoM: {
            type: Sequelize.STRING
        },
        direccion: {
            type: Sequelize.STRING
        },
        telefono: {
            type: Sequelize.STRING
        }
    });

    return Persona;
};