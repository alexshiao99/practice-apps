const db = require('./db');

let saveWord = (req, res) => {
  db.saveWord(req.body)
  .then((results) => res.send(results))
  .catch((error) => {res.send(error); })

}

let deleteWord = (req, res) => {

}

let patchWord = (req, res) => {

}

let readWords = (req, res) => {
  db.readWords({})
  .then((results) => res.send(results))
  .catch((error) => res.send(error))
}

module.exports = {
  saveWord,
  deleteWord,
  patchWord,
  readWords
}