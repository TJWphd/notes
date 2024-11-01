const path = require("path");
// Imports fs and call the Router method
const fs = require("fs");
// Imports express and call the Router method
const express = require("express");
const apiSubrouter = express.Router();

// build path to notes JSON file
const dbFilePath = path.join(__dirname, "..", "db", "db.json");

// get route
apiSubrouter.get("/notes", (req, res) => {
  fs.readFile(dbFilePath, "UTF-8", (error, data) => {
    if (error) {
      console.log(error);
    } else {
      const notes = JSON.parse(data);
      res.status(200).json(notes);
    }
  });
});

// post route
apiSubrouter.post("/notes", (req, res) => {
  fs.readFile(dbFilePath, "UTF-8", (error, data) => {
    if (error) {
      console.log(error);
    } else {
      const notes = JSON.parse(data);
      console.log(notes);
      const newNote = req.body;
      newNote.id = Math.random();
      console.log(id);
      notes.push(newNote);
      fs.writeFile(dbFilePath, JSON.stringify(notes), (error) => {
        if (error) {
          console.log(error);
        } else {
          res.status(200).json(notes);
        }
      });
    }
  });
});

apiSubrouter.delete("/notes/:id", (req, res) => {
  fs.readFile(dbFilePath, "UTF-8", (error, data) => {
    if (error) {
      console.log(error);
    } else {
      const notes = JSON.parse(data);
      console.log(notes);
      console.log(req.params);

      // todo: turn req.params.id into a number, then remove note from array by ID.
      fs.writeFile(dbFilePath, JSON.stringify(notes), (error) => {
        if (error) {
          console.log(error);
        } else {
          res.status(200).json(notes);
        }
      });
    }
  });
});
// Exports app
module.exports = apiSubrouter;
