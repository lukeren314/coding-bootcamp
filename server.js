const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const path = require("path");
// const routes = require("./routes"); // import routes from routes/index.js

// Load environment variables from .env file
dotenv.config({ path: __dirname + "/.env" });

// create the application
const app = express();

// apply middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// set up the routes for the api and the static files
// app.use("/api", routes);
app.use(express.static(__dirname + '/dist/coding-bootcamp'));

// default route to index.html
app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "/dist/coding-bootcamp/", "index.html"));
});

const port = process.env.PORT || 8080;

  // start the server
  app.listen(port, () =>
    console.log(`Server Start! Listening on port ${port}`)
  );