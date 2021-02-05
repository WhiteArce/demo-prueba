const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();


// parse requests of content-type - application/x-www-form-urlencoded
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

app.use(cors());
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

app.use("/", router);

const db = require("./models/index");
db.sequelize.sync();


// // simple route
// router.get("/", (req, res) => {
//   res.send("Mensaje desde el HOME");
// });

require("./routes/persona.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
