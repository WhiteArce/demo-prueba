const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const db = require('./models');
db.sequelize.sync();


var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use("/home", router);
app.use(bodyParser.urlencoded({extended: true}));


// simple route
router.get("/", (req, res) => {
  res.send("Mensaje desde el HOME");
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
