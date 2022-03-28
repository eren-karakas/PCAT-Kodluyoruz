const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');
const ejs = require('ejs');
const app = express();
const photoControllers = require('./controllers/photoControllers');
const pageControllers = require('./controllers/pageControllers');

const server = '127.0.0.1';
const port = '3000';

// CONNECT DB
mongoose.connect('mongodb://localhost/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// TEMPLATE ENGİNE
app.set('view engine', 'ejs');

// MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

// ROUTES
app.get('/', photoControllers.getAllPhotos);
app.get('/photos/:id', photoControllers.getPhoto);
app.post('/photos', photoControllers.createPhoto);
app.put('/photos/:id', photoControllers.updatePhoto);
app.delete('/photos/:id', photoControllers.deletePhoto);
app.get('/photos/edit/:id', photoControllers.getEditPage);

app.get('/about', pageControllers.getAboutPage);
app.get('/add', pageControllers.getAddPage);

app.listen(port, server, () => {
  console.log(`Server is active ! http://${server}:${port}/`);
});
