const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const app = express();
const port = 8082;

// Create a MySQL FoddieDB
const FoddieDB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Bahmuhsal2001?",
  database: "foodiedb",
});

// Connect to the MySQL server
FoddieDB.connect(function (err) {
  if (err) {
    console.error("Error connecting to MySQL server: " + err.stack);
    return;
  }
  console.log("Connected to MySQL server as id " + FoddieDB.threadId);
});

// Add middleware for parsing JSON in the request body
app.use(bodyParser.json());

// Define an endpoint for getting data from the database
app.get("/data", function (req, res) {
  const query = "SELECT * FROM foodiedb.restaurants;";
  FoddieDB.query(query, function (error, results) {
    if (error) {
      console.error("Error getting data from database: " + error.stack);
      return res.status(500).json({ message: "Internal server error" });
    }
    res.json(results);
  });
});

// Start the server
app.listen(port, function () {
  console.log("Server listening on port " + port);
});
