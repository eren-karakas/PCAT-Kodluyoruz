const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Connect DB
mongoose.connect('mongodb://localhost/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create Schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

// Some MongoDB Operations

// Create a Photo
// Photo.create({
//   title: 'Photo Title 4',
//   description: 'Photo Description 4',
// });

// Read a Photo
// Photo.find({}, (err, data) => {
//     console.log(data);
// })

// Update a Photo
// const id = '6237331eeb422d673f2a91ad';

// Photo.findByIdAndUpdate(
//   id,
//   {
//     title: 'Photo Updated New',
//     description: 'Update Success',
//   },
//   {
//       new : true // Logda yeni veri gozukur.
//   },
//   (err, data) => {
//     console.log(data);
//   }
// );

// Delete a Photo
// const id = '62373ce91cefed3babd166ab';

// Photo.findByIdAndDelete(id, (err, data) => {
//     console.log('Photo is removed');
// })