const express = require('express')
const app = express()
const path = require('path')
var fs = require('fs');

app.use('/', (req,res) => {
  fs.readFile(path.join(__dirname, '/uploads/file-1659619895798.jpg'), function(err, data) {
    if (err) throw err; // Fail if the file can't be read.
      res.writeHead(200, {'Content-Type': 'image/jpeg'});
      res.end(data); // Send the file data to the browser.
  })
}).listen(8080)