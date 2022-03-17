const express = require('express');
const path = require('path');
const app = express();

const server = '127.0.0.1'
const port = '3000';

// MIDDLEWARES
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'temp/index.html'))
});

app.listen(port, server, () => {
  console.log(`Server is active ! http://${server}:${port}/`);
});
