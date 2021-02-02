const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();

var corsOptions = {
  origin: "http://localhost:8080",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.json());

app.use("/", router);
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models/index");
db.sequelize.sync();


// // simple route
// router.get("/", (req, res) => {
//   res.send("Mensaje desde el HOME");
// });

require("./routes/persona.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
