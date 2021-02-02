module.exports = (app) => {
  const personas = require("../controllers/persona.controller");
  let router = require("express").Router();

  //Guardado de una persona en la base de datos
  router.post("/", personas.create);

  //Borrado de una persona del registro
  router.delete("/", personas.delete);

  //Actualizacion de datos de persona
  router.get("/:id", personas.update);

  app.use("/home", router);
};
