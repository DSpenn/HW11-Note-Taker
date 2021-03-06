# 11 Express.js: Note Taker

## Description

Link to deployed  [https://sheltered-forest-24497.herokuapp.com/](https://sheltered-forest-24497.herokuapp.com/)

Your assignment is to modify starter code to create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.

## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

## Mock-Up

The following images show the web application's appearance and functionality:
![Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.](./Assets/11-express-homework-demo-01.png)
![Note titled “Balance accounts” reads, “Balance account books by end of day Monday,” with other notes listed on the left.](./Assets/11-express-homework-demo-02.png)

## Grading Requirements
```
-HTML routes
[X] `GET /notes` should return the `notes.html` file.
[X] `GET *` should return the `index.html` file.
-API routes
[X] `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
[X] `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
--
[X] Application front end must connect to an Express.js back end.
[X] Application back end must store notes that have a unique id in a JSON file.
[X] Application must be deployed to Heroku.
[X] Application deployed at live URL.
[X] Application loads with no errors.
[X] Application GitHub URL submitted.
[X] GitHub repository contains application code.
[X] Application console is free of errors.
[X] Repository has a unique name.
[X] Repository follows best practices for file structure and naming conventions.
[X] Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
[X] Repository contains multiple descriptive commit messages.
[X] Repository contains quality README file with description, screenshot, and link to deployed application.
[X] The URL of the functional, deployed application.
[X] The URL of the GitHub repository, with a unique name and a README describing the project.
[X] Application allows users to delete notes.
```
