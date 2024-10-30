// Imports fs and call the Router method

const fs = require("fs");

// Imports express and call the Router method
const express = require("express");
const apiSubrouter = express.Router();

// TODO: Use get and post routes
apiSubrouter.get("/notes", (req, res) => {
  fs.readFile("./db/db.json", "UTF-8", (error, data) => {
    if (error) {
      console.log(error);
    } else {
      const notes = JSON.parse(data);
      res.status(200).json(notes);
    }
  });
});

apiSubrouter.post("/notes", (req, res) => {
  fs.readFile("./db/db.json", "UTF-8", (error, data) => {
    if (error) {
      console.log(error);
    } else {
      const notes = JSON.parse(data);
      const newNote = req.body;
      notes.push (newNote);
    fs.writeFile("./db/db.json", JSON.stringify(newNote), (error) => {
        if (error) {
            console.log(error);
        } else {
            // todo: make this writeFile work
        }
    }
    }
  });
});

// TODO: Export app
module.exports = apiSubrouter;
