module.exports = (app) => {
  const personas = require("../controllers/persona.controller");
  let router = require("express").Router();

  //Obtener todos los datos 
  router.get("/", personas.find);

  //Guardado de una persona en la base de datos
  router.post("/", personas.create);

  //Borrado de una persona del registro
  router.delete("/:id", personas.delete);

  //Actualizacion de datos de persona
  router.put("/:id", personas.update);

  app.use("/", router);
};
