const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const { readFromFile, readAndAppend, writeToFile } = require('../../helpers/fsUtils');
const uuid = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
};


module.exports = function (app) 
{
  app.get('/api/notes', (req, res) => { // GET Route for retrieving all the notes
      console.info(`${req.method} request received for notes`);
      readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
    });

    app.post('/api/notes', (req, res) => { //post for adding note
      console.info(`${req.method} request received to add a note ${req.body}`);
    
      const { title, text, id } = req.body;
      if (req.body) {
        const newNote = {
            title,
            text,
            id: uuid(),
        };
        console.log("new note", newNote);
        readAndAppend(newNote, './db/notes.json');
        res.json(`Note added successfully 🚀`);
      } else {
        throw new Error('BROKEN new note')
      }
    });

  app.delete('/api/notes/:id', (req, res) => { // delete call
      console.info(`${req.method} request received to delete at note`, req.params.id);
      let id = req.params.id;
      
      if (req.body) {
        let data = fs.readFileSync(path.resolve(__dirname, '../../db/notes.json'))
        let jsondata = JSON.parse(data);
    
        for (let i = 0; i < jsondata.length; i++) {
            if (jsondata[i].id === id) {
                console.log("jsondata["+ i + "].id === " + id)
                jsondata.splice(i,1);
            }
        }
    
        writeToFile("./db/notes.json", jsondata);
    
        res.json(`Note `+ id + ` deleted successfully 🚀`);
      } else {
        throw new Error('error on delete')
      }
    });
}