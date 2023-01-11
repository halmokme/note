const express = require("express");
const cors = require("cors");
const app = express();
const MongoClient = require("mongodb").MongoClient;

require("dotenv").config();

MongoClient.connect(process.env.MONGO_URI, (err, client) => {
  if (err) return console.log("err");

  app.listen(4000, () => {
    console.log("server on!");
  });
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("success");
});
