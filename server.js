const express = require("express");
const path = require("path");

// import the routes
const apiRoutes = require("./routes/notes");
const PORT = 3001;
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// apply middleware to use /api
app.use("/api", apiRoutes);

// GET Route for homepage
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

// GET Route for feedback page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

// move the /api/tips routes to their own file
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
