const express = require('express');
const PORT = process.env.PORT || 3001; 
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

require('./routes/apiRoutes/apiRoutes.js')(app);
require('./routes/htmlRoutes/htmlRoutes.js')(app);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} `)
);
