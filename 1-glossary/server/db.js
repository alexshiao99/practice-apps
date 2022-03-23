const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost/27017:${process.env.DB_NAME}`);

const dictionarySchema = mongoose.Schema({
  word: {type: String, required: true, unique: true},
  definition: String
})

const dictionary = mongoose.model('Dictionary', dictionarySchema);

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
let saveWord = function(word) {
  return dictionary.create(word);
}

let deleteWord = function(id) {
  return dictionary.findOneAndRemove({_id: `${id}`});
}

let patchWord = function(word) {
  let id = word._id;
  return dictionary.findOneAndUpdate({_id: `${id}`}, word, {new: true});
}

let readWords = function() {
  // dictionary.remove({}, (err,data)=>{console.log(err,data)});
  return dictionary.find({});
}

module.exports = {
  saveWord,
  deleteWord,
  patchWord,
  readWords
}