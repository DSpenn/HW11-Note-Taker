const path = require('path');
const express = require('express');
const app = express();

module.exports = function (app) 
{
  app.get('/notes', (req, res) => { // GET Route for notes page
      res.sendFile(path.join(__dirname, '../../public/notes.html'))
    });
    
  app.get("*",(req,res) => {  // wildcard GET route for index 
      res.sendFile(path.join(__dirname, '../../public/index.html'))
    });

}