const express = require("express");
const app = express();
const db  = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const Person = require("./models/person");


app.get("/", (req, res) => {
  res.send("Hello World Welcome to our hotel");
});

const personRoutes = require("./routes/personRoutes");
app.use("/person", personRoutes);


app.listen(3000, () => {
  console.log("Server is running on port 3000");
}); 

