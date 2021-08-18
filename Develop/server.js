const express = require('express');
const path = require('path');
const fs = require('fs');
//const api = require('./routes/index.js');
const notesData = require('./db/notes.json');
const notes = require('./db/notes.json');
const uuid = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

const { readFromFile, readAndAppend, writeToFile } = require('./helpers/fsUtils');
const { json } = require('express');

const PORT = 3001;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use('/api', api);
app.use(express.static('public'));





app.get('/notes', (req, res) => { // GET Route for notes page
  res.sendFile(path.join(__dirname, 'public/notes.html'))
});

//app.get('/api/notes', (req, res) => res.json(notesData)); // res.json() allows us to return JSON instead of a buffer, string, or static file

app.get('/api/notes', (req, res) => { // GET Route for retrieving all the notes
  console.info(`${req.method} request received for notes`);
  readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
});


app.get("*",(req,res) => {  // wildcard GET route for index 
  res.sendFile(path.join(__dirname, '/public/index.html'))
});


app.post('/api/notes', (req, res) => { //post for adding note
  console.log(req.body);
  console.info(`${req.method} request received to add a note`);

  const { title, text, id } = req.body;
  console.log("req.body", req.body);
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
  //console.log(req.body);
  //console.log("req.params.id clicked id : ", req.params.id);
  console.info(`${req.method} request received to delete at note`, req.params.id);
  //let id = JSON.stringify(req.params.id);
  let id = req.params.id;
  let found = notes.some(note => note.id === (req.params.id));
  console.log("Found", found);

  console.log("id", id);
  if (req.body) {
    let data = fs.readFileSync(path.resolve(__dirname, './db/notes.json'))
    //console.log("data", data);
    let jsondata = JSON.parse(data);
    //console.log("jsondata ", jsondata);
    //console.log("filter??" + jsondata.filter(jsondata.id === id));
    //console.log("keys", Object.keys(notesData));
    //console.log("values", Object.values(notesData));

    console.log("entries", Object.entries(jsondata));
    console.log("before delete json", jsondata);
    //delete data[id];
    //delete notesData[id];
    console.log("jsondata length ", jsondata.length);
    //let newjson = [];

    for (let i = 0; i < jsondata.length; i++) {
        if (jsondata[i].id === id) {
            console.log("jsondata["+ i + "].id === " + id)
            //delete jsondata[i];
            console.log("typeof " + typeof(jsondata));
            jsondata.splice(i,1);
        }
    }
    //console.log("newjson ", newjson);
    //delete jsondata[id];
    //delete jsondata[JSON.stringify(id)];

    console.log("after del json", jsondata);

    //fs.writeFileSync("./db/notes.json", jsondata);
    writeToFile("./db/notes.json", jsondata);

    res.json(`Note `+ id + ` deleted successfully 🚀`);
  } else {
    throw new Error('BROKEN delete')
  }
});




app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);