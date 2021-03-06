const Photo = require('../models/Photo');
const fs = require('fs');

const getAllPhotos = async (req, res) => {
  const page = req.query.page || 1;
  const photosPerPage = 2
  
  const totalPhotos = await Photo.find().countDocuments()

  const photos = await Photo.find()
  .sort('-dateCreated')
  .skip((page-1) * photosPerPage)
  .limit(photosPerPage)

  res.render('index', {
    photos,
    current : page,
    pages : Math.ceil(totalPhotos / photosPerPage)
  })
};

const getPhoto = async (req, res) => {
  const photo = await Photo.findById(req.params.id);
  res.render('photo', {
    photo,
  });
};

const createPhoto = async (req, res) => {
  const uploadDir = 'public/uploads';

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  let uploadedImage = req.files.image;
  let uploadPath = __dirname + '/../public/uploads/' + uploadedImage.name;

  uploadedImage.mv(uploadPath, async () => {
    await Photo.create({
      ...req.body,
      image: '/uploads/' + uploadedImage.name,
    });
    res.redirect('/');
  });
};

const updatePhoto = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  photo.title = req.body.title;
  photo.description = req.body.description;
  await photo.save();
  res.redirect(`/photos/${req.params.id}`);
};

const deletePhoto = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });

  let deletedImage = __dirname + '/../public' + photo.image;

  if ((await Photo.find({ image: photo.image })).length < 2) {
    fs.unlinkSync(deletedImage);
  }

  await Photo.findByIdAndRemove(req.params.id);

  res.redirect('/');
};

const getEditPage = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  res.render('edit', {
    photo,
  });
};

module.exports = {
  getAllPhotos,
  getPhoto,
  createPhoto,
  updatePhoto,
  deletePhoto,
  getEditPage,
};
