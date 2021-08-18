const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');


// POST Route for a new UX/UI note
notes.post('/api/notes', (req, res) => {
  console.log(req.body);

  const { noteTitle, noteText, note_id } = req.body;
  console.log("req.body", req.body);
  if (req.body) {
    const newNote = {
        noteTitle,
        noteText,
        note_id: uuid(),
    };
    console.log("new note", newNote);
    readAndAppend(newNote, '../db/notes.json');
    res.json(`Note added successfully 🚀`);
  } else {
    throw new Error('BROKEN new note')
  }
});

module.exports = notes;
