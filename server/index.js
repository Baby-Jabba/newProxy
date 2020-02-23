require('newrelic')
const express = require('express');
let app = express();
const port = 8080;
const path = require('path');


app.use('/:id', express.static(path.join(__dirname, '/../index.html')));

app.listen(port, () => {
  console.log(`proxy server listening on port ${port}`);
})

