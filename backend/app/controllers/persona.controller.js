const db = require('../models/index');
const Persona = db.personas;
const Op = db.sequelize.Op;

exports.create = (req, res) => {
    const persona = {
        nombre: req.body.nombre,
        apellidoP: req.body.apellidoP,
        apellidoM: req.body.apellidoM,
        direccion: req.body.direccion,
        telefono: req.body.telefono
    }

    Persona.create(persona).then(data => {
        res.send(data);
    }).catch(error => {
        res.status(500).send({message: 'Ha ocurrido un error'});
    });
};

exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    let condition = nombre ? { nombre: { [Op.like]: `%${nombre}%` } } : null;

    Persona.findAll({where: condition}).then(data => {
        res.send(data);
    }).catch(error => {
        res.status(500).send({message: 'Ha ocurrido un error'});
    });
};

exports.update = (req, res) => {
    const id = req.params.id;

  Tutorial.update(req.body, {
    where: { id: id }
  });

};

exports.delete = (req, res) => {
    const id = req.params.id;

    Persona.destroy({
        where: {id: id}
    })
}